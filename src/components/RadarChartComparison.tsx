import { useState, useMemo } from "react";
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DSP_VARIABLES,
  MIN_MAX,
  normalizeValue,
  getCountries,
  getYearsForCountry,
  getCountryData,
  type DSPVariableKey,
} from "@/data/radarChartData";

const VARIABLE_KEYS = Object.keys(DSP_VARIABLES) as DSPVariableKey[];

// Short labels for radar chart axes to prevent overlapping
const SHORT_LABELS: Record<DSPVariableKey, string> = {
  COM: "Online & Social Media",
  OMP: "Media Perspectives",
  PEC: "Political & Election",
  GD: "Gov. Disinfo.",
  PD: "Party Disinfo.",
  OMF: "Fractionalization",
  SMV: "Social Violence",
};

interface CountryComboboxProps {
  value: string;
  onValueChange: (value: string) => void;
  countries: string[];
  colorDot: string;
  label: string;
}

function CountryCombobox({ value, onValueChange, countries, colorDot, label }: CountryComboboxProps) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="truncate">{value || `Select ${label}`}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0" align="start">
        <Command>
          <CommandInput placeholder={`Search ${label.toLowerCase()}...`} />
          <CommandList>
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={() => {
                    onValueChange(country);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === country ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function RadarChartComparison() {
  const countries = useMemo(() => getCountries(), []);
  
  const [country1, setCountry1] = useState("United States of America");
  const [country2, setCountry2] = useState("Venezuela");
  
  const years1 = useMemo(() => getYearsForCountry(country1), [country1]);
  const years2 = useMemo(() => getYearsForCountry(country2), [country2]);
  
  const [year1, setYear1] = useState(years1[0] || 2023);
  const [year2, setYear2] = useState(years2[0] || 2023);

  // Update year when country changes
  const handleCountry1Change = (value: string) => {
    setCountry1(value);
    const newYears = getYearsForCountry(value);
    setYear1(newYears[0] || 2023);
  };

  const handleCountry2Change = (value: string) => {
    setCountry2(value);
    const newYears = getYearsForCountry(value);
    setYear2(newYears[0] || 2023);
  };

  const data1 = useMemo(() => getCountryData(country1, year1), [country1, year1]);
  const data2 = useMemo(() => getCountryData(country2, year2), [country2, year2]);

  const chartData = useMemo(() => {
    if (!data1 || !data2) return [];
    
    return VARIABLE_KEYS.map((key) => ({
      variable: SHORT_LABELS[key],
      fullName: DSP_VARIABLES[key],
      shortName: key,
      [country1]: normalizeValue(data1[key], MIN_MAX[key].min, MIN_MAX[key].max),
      [country2]: normalizeValue(data2[key], MIN_MAX[key].min, MIN_MAX[key].max),
      [`${country1}_raw`]: data1[key],
      [`${country2}_raw`]: data2[key],
    }));
  }, [data1, data2, country1, country2]);

  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Country Selectors */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Country 1 Selector */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#648FFF" }} />
            <span className="font-semibold">Country 1</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CountryCombobox
              value={country1}
              onValueChange={handleCountry1Change}
              countries={countries}
              colorDot="#648FFF"
              label="Country 1"
            />
            <Select value={year1.toString()} onValueChange={(v) => setYear1(parseInt(v))}>
              <SelectTrigger>
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
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#DC267F" }} />
            <span className="font-semibold">Country 2</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <CountryCombobox
              value={country2}
              onValueChange={handleCountry2Change}
              countries={countries}
              colorDot="#DC267F"
              label="Country 2"
            />
            <Select value={year2.toString()} onValueChange={(v) => setYear2(parseInt(v))}>
              <SelectTrigger>
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

      {/* Radar Chart and EDI Comparison */}
      <div className="grid lg:grid-cols-[1fr,200px] gap-6">
        {/* Radar Chart */}
        <div className="h-[400px] md:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData} margin={{ top: 40, right: 100, bottom: 40, left: 100 }}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="variable" 
                tick={{ 
                  fill: "hsl(var(--foreground))", 
                  fontSize: 11,
                }}
                tickLine={false}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 1]} 
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
                tickCount={5}
              />
              <Radar
                name={`${country1} (${year1})`}
                dataKey={country1}
                stroke="#648FFF"
                fill="#648FFF"
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Radar
                name={`${country2} (${year2})`}
                dataKey={country2}
                stroke="#DC267F"
                fill="#DC267F"
                fillOpacity={0.25}
                strokeWidth={2}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload?.length) return null;
                  const data = payload[0].payload;
                  return (
                    <div className="bg-background border rounded-lg p-3 shadow-lg">
                      <p className="font-semibold mb-1">{data.fullName}</p>
                      <p className="text-xs text-muted-foreground mb-2">({data.shortName})</p>
                      {payload.map((entry, i) => (
                        <p key={i} className="text-sm" style={{ color: entry.color }}>
                          {entry.name}: {(Number(entry.value) * 100).toFixed(0)}%
                        </p>
                      ))}
                    </div>
                  );
                }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* EDI Comparison */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">EDI Score</h3>
          
          {data1 && (
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{country1} ({year1})</p>
                <p className="text-2xl font-bold" style={{ color: "#648FFF" }}>
                  {data1.EDI.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          )}
          
          {data2 && (
            <Card>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{country2} ({year2})</p>
                <p className="text-2xl font-bold" style={{ color: "#DC267F" }}>
                  {data2.EDI.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          )}

          <p className="text-xs text-muted-foreground">
            <strong>EDI</strong> = Electoral Democracy Index (0-1). Higher = stronger democracy.
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
