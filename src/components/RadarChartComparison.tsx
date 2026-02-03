import { useEffect, useMemo, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import {
  DSP_VARIABLES,
  normalizeValue,
  type DSPVariableKey,
} from "@/data/radarChartData";
import { loadDspDataset, type DspDataset } from "@/data/dspDataset";
import { CountryCombobox } from "@/components/radar/CountryCombobox";
import { DspRadarTooltip } from "@/components/radar/DspRadarTooltip";

const VARIABLE_KEYS = Object.keys(DSP_VARIABLES) as DSPVariableKey[];

const COUNTRY_1_STROKE = "hsl(var(--chart-blue))";
const COUNTRY_1_FILL = "hsl(var(--chart-blue))";
const COUNTRY_2_STROKE = "hsl(var(--chart-magenta))";
const COUNTRY_2_FILL = "hsl(var(--chart-magenta))";

const RADIAL_TICKS = [0, 0.25, 0.5, 0.75, 1] as const;

// Calculate EDI percentile
function calculatePercentile(ediValue: number, allEDIValues: number[]): number {
  const count = allEDIValues.filter(v => v <= ediValue).length;
  return (count / allEDIValues.length) * 100;
}

export function RadarChartComparison() {
  const isMobile = useIsMobile();
  const [dataset, setDataset] = useState<DspDataset | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    loadDspDataset()
      .then((d) => {
        if (!alive) return;
        setDataset(d);
      })
      .catch((e) => {
        if (!alive) return;
        setLoadError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      alive = false;
    };
  }, []);

  const countries = dataset?.countries ?? [];

  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [year1, setYear1] = useState<number | null>(null);
  const [year2, setYear2] = useState<number | null>(null);

  // Set defaults once dataset is loaded (match Streamlit intent: sensible defaults + most recent year)
  useEffect(() => {
    if (!dataset) return;

    const defaultC1 =
      dataset.countries.includes("United States of America")
        ? "United States of America"
        : dataset.countries[0] ?? "";
    const defaultC2 =
      dataset.countries.includes("Bangladesh")
        ? "Bangladesh"
        : dataset.countries[1] ?? dataset.countries[0] ?? "";

    setCountry1((prev) => prev || defaultC1);
    setCountry2((prev) => prev || defaultC2);
  }, [dataset]);

  const years1 = useMemo(() => {
    if (!dataset || !country1) return [];
    return dataset.yearsByCountry[country1] ?? [];
  }, [dataset, country1]);

  const years2 = useMemo(() => {
    if (!dataset || !country2) return [];
    return dataset.yearsByCountry[country2] ?? [];
  }, [dataset, country2]);

  // Default to most recent year (Streamlit uses index=len-1 on ascending years)
  useEffect(() => {
    if (!years1.length) return;
    const mostRecent = years1[years1.length - 1];
    setYear1((prev) => (prev && years1.includes(prev) ? prev : mostRecent));
  }, [years1]);

  useEffect(() => {
    if (!years2.length) return;
    const mostRecent = years2[years2.length - 1];
    setYear2((prev) => (prev && years2.includes(prev) ? prev : mostRecent));
  }, [years2]);

  // Update year when country changes
  const handleCountry1Change = (value: string) => {
    setCountry1(value);
    const newYears = dataset?.yearsByCountry[value] ?? [];
    const mostRecent = newYears[newYears.length - 1];
    setYear1(mostRecent ?? null);
  };

  const handleCountry2Change = (value: string) => {
    setCountry2(value);
    const newYears = dataset?.yearsByCountry[value] ?? [];
    const mostRecent = newYears[newYears.length - 1];
    setYear2(mostRecent ?? null);
  };

  const data1 = useMemo(() => {
    if (!dataset || !country1 || !year1) return undefined;
    return dataset.getRow(country1, year1);
  }, [dataset, country1, year1]);

  const data2 = useMemo(() => {
    if (!dataset || !country2 || !year2) return undefined;
    return dataset.getRow(country2, year2);
  }, [dataset, country2, year2]);

  // Get all EDI values for percentile calculation (full DB)
  const allEDIValues = dataset?.ediValues ?? [];

  const chartData = useMemo(() => {
    if (!dataset || !data1 || !data2) return [];
    
    return VARIABLE_KEYS.map((key) => ({
      variable: DSP_VARIABLES[key], // Use full variable names like Streamlit
      fullName: DSP_VARIABLES[key],
      shortName: key,
      c1: normalizeValue(data1[key], dataset.minMax[key].min, dataset.minMax[key].max),
      c2: normalizeValue(data2[key], dataset.minMax[key].min, dataset.minMax[key].max),
      c1_raw: data1[key],
      c2_raw: data2[key],
    }));
  }, [dataset, data1, data2]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="space-y-6">
      {loadError ? (
        <div className="border rounded-lg p-4 text-sm">
          <p className="font-semibold mb-1">Failed to load Democracy_Data.db</p>
          <p className="text-muted-foreground">{loadError}</p>
        </div>
      ) : null}

      {/* Country Selectors */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Country 1 Selector */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-chart-blue" />
            <span className="font-semibold text-sm sm:text-base">Country 1</span>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-2 sm:gap-3">
            <CountryCombobox
              value={country1}
              onValueChange={handleCountry1Change}
              countries={countries}
              label="Country 1"
              disabled={!dataset}
            />
            <Select
              value={year1 ? year1.toString() : ""}
              onValueChange={(v) => setYear1(parseInt(v))}
              disabled={!dataset || !years1.length}
            >
              <SelectTrigger className="w-[80px] sm:w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years1.map((y) => (
                  <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Country 2 Selector */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-chart-magenta" />
            <span className="font-semibold text-sm sm:text-base">Country 2</span>
          </div>
          <div className="grid grid-cols-[1fr,auto] gap-2 sm:gap-3">
            <CountryCombobox
              value={country2}
              onValueChange={handleCountry2Change}
              countries={countries}
              label="Country 2"
              disabled={!dataset}
            />
            <Select
              value={year2 ? year2.toString() : ""}
              onValueChange={(v) => setYear2(parseInt(v))}
              disabled={!dataset || !years2.length}
            >
              <SelectTrigger className="w-[80px] sm:w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years2.map((y) => (
                  <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Radar Chart and EDI Comparison - matching Streamlit layout */}
      <div className="grid lg:grid-cols-[3fr,1fr] gap-6">
        {/* Radar Chart */}
        <div className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px]">
          <h3 className="text-center font-semibold mb-4 text-sm sm:text-base">DSP Variables Comparison</h3>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart 
              data={chartData} 
              margin={isMobile 
                ? { top: 30, right: 40, bottom: 30, left: 40 }
                : { top: 60, right: 120, bottom: 60, left: 120 }
              }
            >
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="variable" 
                tick={{ 
                  fill: "hsl(var(--foreground))", 
                  fontSize: isMobile ? 7 : 10,
                }}
                tickLine={false}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 1]} 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: isMobile ? 7 : 9 }}
                // Recharts' TS types are stricter than runtime here; numbers are valid tick values.
                ticks={RADIAL_TICKS as unknown as any[]}
                tickLine={false}
                tickFormatter={(value) => {
                  const v = typeof value === "number" ? value : Number(value);
                  if (v === 0) return "Min";
                  if (v === 0.25) return "25%";
                  if (v === 0.5) return "50%";
                  if (v === 0.75) return "75%";
                  if (v === 1) return "Max";
                  return "";
                }}
              />
              <Radar
                name={`${country1} (${year1})`}
                dataKey="c1"
                stroke={COUNTRY_1_STROKE}
                fill={COUNTRY_1_FILL}
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Radar
                name={`${country2} (${year2})`}
                dataKey="c2"
                stroke={COUNTRY_2_STROKE}
                fill={COUNTRY_2_FILL}
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Tooltip
                content={<DspRadarTooltip />}
              />
              <Legend 
                verticalAlign="top" 
                align="center"
                wrapperStyle={{ paddingBottom: isMobile ? 10 : 20, fontSize: isMobile ? 11 : 14 }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* EDI Comparison - matching Streamlit design */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            📊 EDI
          </h3>
          
          {data1 && (
            <Card className="border-l-4 border-chart-blue">
              <CardContent className="p-4">
                <p className="text-sm font-medium mb-1">
                  <span className="font-bold">{country1}</span> ({year1})
                </p>
                <p className="text-xs text-muted-foreground mb-2">EDI Score</p>
                <p className="text-3xl font-bold text-chart-blue">
                  {data1.EDI.toFixed(3)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {calculatePercentile(data1.EDI, allEDIValues).toFixed(1)}% percentile
                </p>
              </CardContent>
            </Card>
          )}

          <div className="border-t border-border" />
          
          {data2 && (
            <Card className="border-l-4 border-chart-magenta">
              <CardContent className="p-4">
                <p className="text-sm font-medium mb-1">
                  <span className="font-bold">{country2}</span> ({year2})
                </p>
                <p className="text-xs text-muted-foreground mb-2">EDI Score</p>
                <p className="text-3xl font-bold text-chart-magenta">
                  {data2.EDI.toFixed(3)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {calculatePercentile(data2.EDI, allEDIValues).toFixed(1)}% percentile
                </p>
              </CardContent>
            </Card>
          )}

          <div className="border-t border-border" />

          <p className="text-xs text-muted-foreground">
            <strong>EDI</strong> measures electoral democracy (0-1). Higher = stronger democracy.
          </p>
        </div>
      </div>

      {/* Variable Descriptions */}
      <Collapsible open={isDescriptionOpen} onOpenChange={setIsDescriptionOpen}>
        <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className={`h-4 w-4 transition-transform ${isDescriptionOpen ? 'rotate-180' : ''}`} />
          Variable Descriptions
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            {VARIABLE_KEYS.map((key) => (
              <div key={key} className="flex gap-2">
                <span className="font-mono font-semibold text-accent">{key}:</span>
                <span className="text-muted-foreground">{DSP_VARIABLES[key]}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Interpretation:</strong> Higher values indicate healthier digital environments. 
            For GD, PD, OMF, and SMV, higher means <em>less</em> disinformation, fractionalization, and violence.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
