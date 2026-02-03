import type { TooltipProps } from "recharts";

type AnyRecord = Record<string, unknown>;

export function DspRadarTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const data = (payload[0]?.payload ?? {}) as AnyRecord;
  const fullName = String(data.fullName ?? "");
  const shortName = String(data.shortName ?? "");

  return (
    <div className="bg-background border rounded-lg p-3 shadow-lg">
      <p className="font-semibold mb-1">{fullName}</p>
      <p className="text-xs text-muted-foreground mb-2">({shortName})</p>
      {payload.map((entry, i) => {
        const dk = String(entry.dataKey ?? "");
        const rawKey = `${dk}_raw`;
        const rawValue = data[rawKey];

        return (
          <div key={i} className="text-sm" style={{ color: entry.color }}>
            <p>{entry.name}</p>
            <p>
              Value:{" "}
              {typeof rawValue === "number" ? rawValue.toFixed(3) : "—"}
            </p>
            <p>
              Normalized:{" "}
              {typeof entry.value === "number" ? entry.value.toFixed(3) : "—"}
            </p>
          </div>
        );
      })}
    </div>
  );
}
