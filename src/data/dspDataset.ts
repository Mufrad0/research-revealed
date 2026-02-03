import initSqlJs from "sql.js";
import wasmUrl from "sql.js/dist/sql-wasm.wasm?url";
import { DSP_VARIABLES, type DSPVariableKey } from "@/data/radarChartData";

export interface DspRow {
  country_name: string;
  country_code: string;
  year: number;
  COM: number;
  OMP: number;
  PEC: number;
  GD: number;
  PD: number;
  OMF: number;
  SMV: number;
  EDI: number;
}

export interface DspDataset {
  rows: DspRow[];
  countries: string[];
  yearsByCountry: Record<string, number[]>;
  minMax: Record<DSPVariableKey, { min: number; max: number }>;
  ediValues: number[];
  getRow: (countryName: string, year: number) => DspRow | undefined;
}

const DSP_KEYS = Object.keys(DSP_VARIABLES) as DSPVariableKey[];

const STREAMLIT_QUERY = `
  SELECT 
      m.country_name,
      m.country_code,
      m.year,
      d.COM, d.OMP, d.PEC, d.GD, d.PD, d.OMF, d.SMV,
      v.EDI
  FROM country_metadata m
  JOIN dsp_variables d 
      ON m.country_code = d.country_code AND m.year = d.year
  JOIN vdem_variables v
      ON m.country_code = v.country_code AND m.year = v.year
  ORDER BY m.country_name, m.year
`;

let datasetPromise: Promise<DspDataset> | null = null;

function assertNumber(value: unknown): number {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : NaN;
}

function createDataset(rows: DspRow[]): DspDataset {
  const yearsByCountryMap = new Map<string, Set<number>>();
  const rowByKey = new Map<string, DspRow>();

  for (const row of rows) {
    rowByKey.set(`${row.country_name}__${row.year}`, row);
    const set = yearsByCountryMap.get(row.country_name) ?? new Set<number>();
    set.add(row.year);
    yearsByCountryMap.set(row.country_name, set);
  }

  const countries = Array.from(yearsByCountryMap.keys()).sort();

  const yearsByCountry: Record<string, number[]> = {};
  for (const [country, yearSet] of yearsByCountryMap.entries()) {
    yearsByCountry[country] = Array.from(yearSet).sort((a, b) => a - b);
  }

  const minMax = {} as Record<DSPVariableKey, { min: number; max: number }>;
  for (const key of DSP_KEYS) {
    let min = Infinity;
    let max = -Infinity;
    for (const row of rows) {
      const v = row[key];
      if (Number.isFinite(v)) {
        if (v < min) min = v;
        if (v > max) max = v;
      }
    }
    minMax[key] = {
      min: Number.isFinite(min) ? min : 0,
      max: Number.isFinite(max) ? max : 1,
    };
  }

  const ediValues = rows.map((r) => r.EDI).filter((v) => Number.isFinite(v));

  return {
    rows,
    countries,
    yearsByCountry,
    minMax,
    ediValues,
    getRow: (countryName: string, year: number) => rowByKey.get(`${countryName}__${year}`),
  };
}

/**
 * Loads the full dataset from /public/data/Democracy_Data.db using the SAME SQL as Streamlit.
 * Cached in-memory for the session.
 */
export async function loadDspDataset(): Promise<DspDataset> {
  if (datasetPromise) return datasetPromise;

  datasetPromise = (async () => {
    const SQL = await initSqlJs({
      locateFile: () => wasmUrl,
    });

    const res = await fetch("/data/Democracy_Data.db");
    if (!res.ok) {
      throw new Error(`Failed to fetch Democracy_Data.db: ${res.status} ${res.statusText}`);
    }
    const buf = await res.arrayBuffer();
    const db = new SQL.Database(new Uint8Array(buf));

    try {
      const exec = db.exec(STREAMLIT_QUERY);
      if (!exec.length) throw new Error("Query returned no results");

      const { columns, values } = exec[0];
      const idx = (name: string) => columns.indexOf(name);

      const iCountry = idx("country_name");
      const iCode = idx("country_code");
      const iYear = idx("year");
      const iEDI = idx("EDI");
      const iVars: Record<DSPVariableKey, number> = {
        COM: idx("COM"),
        OMP: idx("OMP"),
        PEC: idx("PEC"),
        GD: idx("GD"),
        PD: idx("PD"),
        OMF: idx("OMF"),
        SMV: idx("SMV"),
      };

      if (iCountry < 0 || iCode < 0 || iYear < 0 || iEDI < 0) {
        throw new Error(`Unexpected DB schema: missing expected columns (${columns.join(", ")})`);
      }

      const rows: DspRow[] = values.map((row) => {
        const record: DspRow = {
          country_name: String(row[iCountry] ?? ""),
          country_code: String(row[iCode] ?? ""),
          year: assertNumber(row[iYear]),
          COM: assertNumber(row[iVars.COM]),
          OMP: assertNumber(row[iVars.OMP]),
          PEC: assertNumber(row[iVars.PEC]),
          GD: assertNumber(row[iVars.GD]),
          PD: assertNumber(row[iVars.PD]),
          OMF: assertNumber(row[iVars.OMF]),
          SMV: assertNumber(row[iVars.SMV]),
          EDI: assertNumber(row[iEDI]),
        };
        return record;
      });

      return createDataset(rows);
    } finally {
      db.close();
    }
  })();

  return datasetPromise;
}
