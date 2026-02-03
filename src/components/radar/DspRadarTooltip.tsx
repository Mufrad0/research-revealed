import type { TooltipProps } from "recharts";

type AnyRecord = Record<string, unknown>;

export function DspRadarTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const data = (payload[0]?.payload ?? {}) as AnyRecord;
  const fullName = String(data.fullName ?? "");
  const shortName = String(data.shortName ?? "");

  return (
    <div className="bg-background/95 backdrop-blur border rounded-lg p-3 shadow-lg w-[280px]">
      <p className="font-semibold leading-snug">{fullName}</p>
      <p className="text-xs text-muted-foreground mb-3">({shortName})</p>

      <div className="space-y-2">
        {payload.map((entry, i) => {
          const dk = String(entry.dataKey ?? "");
          const rawKey = `${dk}_raw`;
          const rawValue = data[rawKey];
          const rawText = typeof rawValue === "number" ? rawValue.toFixed(3) : "—";
          const scaledText = typeof entry.value === "number" ? entry.value.toFixed(3) : "—";

          return (
            <div key={i} className="rounded-md bg-muted/30 px-2.5 py-2">
              <div className="flex items-center gap-2 text-sm font-medium">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                  aria-hidden="true"
                />
                <span className="truncate">{entry.name}</span>
              </div>

              <div className="mt-1 grid grid-cols-[64px,1fr] gap-x-3 gap-y-0.5 text-xs">
                <span className="text-muted-foreground">Raw</span>
                <span className="text-foreground tabular-nums">{rawText}</span>
                <span className="text-muted-foreground">Scaled</span>
                <span className="text-foreground tabular-nums">{scaledText}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
