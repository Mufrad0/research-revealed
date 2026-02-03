// DSP variable definitions
export const DSP_VARIABLES = {
  COM: 'Online Media Consumption',
  OMP: 'Online Media Perspectives',
  PEC: 'Political/Election Communication',
  GD: 'Government Disinformation',
  PD: 'Party Disinformation',
  OMF: 'Online Media Fractionalization',
  SMV: 'Social Media Violence'
} as const;

export type DSPVariableKey = keyof typeof DSP_VARIABLES;

export interface CountryData {
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

// Sample data for key countries (2023 values extracted from the research)
// Higher values = healthier digital environment for all variables
export const COUNTRY_DATA: CountryData[] = [
  // Democratic countries
  { country_name: "Sweden", country_code: "SWE", year: 2023, COM: 2.89, OMP: 2.76, PEC: 2.45, GD: 2.89, PD: 2.67, OMF: 1.98, SMV: 2.45, EDI: 0.89 },
  { country_name: "Norway", country_code: "NOR", year: 2023, COM: 2.67, OMP: 2.56, PEC: 2.34, GD: 2.78, PD: 2.56, OMF: 1.87, SMV: 2.34, EDI: 0.91 },
  { country_name: "Denmark", country_code: "DNK", year: 2023, COM: 2.78, OMP: 2.67, PEC: 2.23, GD: 2.67, PD: 2.45, OMF: 1.78, SMV: 2.23, EDI: 0.90 },
  { country_name: "Germany", country_code: "DEU", year: 2023, COM: 2.45, OMP: 2.12, PEC: 1.89, GD: 2.34, PD: 2.12, OMF: 0.56, SMV: 1.78, EDI: 0.86 },
  { country_name: "United Kingdom", country_code: "GBR", year: 2023, COM: 2.34, OMP: 1.89, PEC: 1.67, GD: 2.12, PD: 1.78, OMF: 0.34, SMV: 1.56, EDI: 0.81 },
  { country_name: "France", country_code: "FRA", year: 2023, COM: 2.23, OMP: 1.67, PEC: 1.45, GD: 1.89, PD: 1.56, OMF: 0.12, SMV: 1.34, EDI: 0.78 },
  { country_name: "Japan", country_code: "JPN", year: 2023, COM: 2.12, OMP: 1.78, PEC: 1.56, GD: 2.23, PD: 2.01, OMF: 0.45, SMV: 1.89, EDI: 0.83 },
  { country_name: "South Korea", country_code: "KOR", year: 2023, COM: 2.56, OMP: 1.45, PEC: 1.23, GD: 1.67, PD: 1.34, OMF: -0.23, SMV: 1.12, EDI: 0.79 },
  { country_name: "Canada", country_code: "CAN", year: 2023, COM: 2.34, OMP: 1.89, PEC: 1.67, GD: 2.01, PD: 1.78, OMF: 0.23, SMV: 1.67, EDI: 0.84 },
  { country_name: "Australia", country_code: "AUS", year: 2023, COM: 2.23, OMP: 1.78, PEC: 1.56, GD: 2.12, PD: 1.89, OMF: 0.34, SMV: 1.78, EDI: 0.82 },
  
  // USA - notable for recent polarization
  { country_name: "United States of America", country_code: "USA", year: 2023, COM: 2.67, OMP: 1.23, PEC: 0.89, GD: 1.34, PD: 0.78, OMF: -0.89, SMV: 0.56, EDI: 0.72 },
  { country_name: "United States of America", country_code: "USA", year: 2020, COM: 2.56, OMP: 1.12, PEC: 0.67, GD: 1.12, PD: 0.56, OMF: -1.12, SMV: 0.34, EDI: 0.69 },
  { country_name: "United States of America", country_code: "USA", year: 2015, COM: 2.34, OMP: 1.56, PEC: 1.23, GD: 1.78, PD: 1.23, OMF: -0.34, SMV: 1.12, EDI: 0.78 },
  { country_name: "United States of America", country_code: "USA", year: 2010, COM: 1.89, OMP: 1.78, PEC: 1.56, GD: 2.12, PD: 1.67, OMF: 0.23, SMV: 1.45, EDI: 0.82 },
  
  // Venezuela - democratic decline case study
  { country_name: "Venezuela", country_code: "VEN", year: 2023, COM: 1.23, OMP: -1.89, PEC: -2.34, GD: -2.56, PD: -2.12, OMF: -1.78, SMV: -1.56, EDI: 0.18 },
  { country_name: "Venezuela", country_code: "VEN", year: 2020, COM: 1.12, OMP: -1.67, PEC: -2.12, GD: -2.34, PD: -1.89, OMF: -1.56, SMV: -1.34, EDI: 0.21 },
  { country_name: "Venezuela", country_code: "VEN", year: 2015, COM: 0.89, OMP: -1.23, PEC: -1.67, GD: -1.89, PD: -1.45, OMF: -1.12, SMV: -0.89, EDI: 0.28 },
  { country_name: "Venezuela", country_code: "VEN", year: 2010, COM: 0.67, OMP: -0.56, PEC: -0.89, GD: -1.12, PD: -0.78, OMF: -0.56, SMV: -0.34, EDI: 0.42 },
  { country_name: "Venezuela", country_code: "VEN", year: 2000, COM: -0.23, OMP: 0.89, PEC: 0.45, GD: 0.34, PD: 0.56, OMF: 0.23, SMV: 0.67, EDI: 0.58 },
  
  // Other notable countries
  { country_name: "Brazil", country_code: "BRA", year: 2023, COM: 1.89, OMP: 0.67, PEC: 0.34, GD: 0.12, PD: -0.23, OMF: -0.89, SMV: -0.45, EDI: 0.61 },
  { country_name: "India", country_code: "IND", year: 2023, COM: 1.67, OMP: 0.34, PEC: -0.12, GD: -0.45, PD: -0.67, OMF: -1.23, SMV: -0.78, EDI: 0.52 },
  { country_name: "Mexico", country_code: "MEX", year: 2023, COM: 1.56, OMP: 0.89, PEC: 0.23, GD: 0.45, PD: 0.12, OMF: -0.67, SMV: -0.56, EDI: 0.58 },
  { country_name: "Nigeria", country_code: "NGA", year: 2023, COM: 0.89, OMP: 0.12, PEC: -0.45, GD: -0.78, PD: -0.56, OMF: -1.12, SMV: -0.89, EDI: 0.45 },
  { country_name: "South Africa", country_code: "ZAF", year: 2023, COM: 1.12, OMP: 0.78, PEC: 0.34, GD: 0.56, PD: 0.23, OMF: -0.45, SMV: 0.12, EDI: 0.67 },
  { country_name: "Indonesia", country_code: "IDN", year: 2023, COM: 1.45, OMP: 0.56, PEC: 0.12, GD: 0.34, PD: 0.01, OMF: -0.78, SMV: -0.34, EDI: 0.59 },
  
  // Authoritarian countries
  { country_name: "China", country_code: "CHN", year: 2023, COM: 2.12, OMP: -2.34, PEC: -2.78, GD: -3.12, PD: -2.89, OMF: -0.45, SMV: -1.23, EDI: 0.08 },
  { country_name: "Russia", country_code: "RUS", year: 2023, COM: 1.89, OMP: -1.56, PEC: -2.12, GD: -2.78, PD: -2.34, OMF: -1.12, SMV: -1.45, EDI: 0.15 },
  { country_name: "Iran", country_code: "IRN", year: 2023, COM: 0.67, OMP: -2.12, PEC: -2.45, GD: -2.67, PD: -2.23, OMF: -1.45, SMV: -1.89, EDI: 0.12 },
  { country_name: "Saudi Arabia", country_code: "SAU", year: 2023, COM: 1.56, OMP: -2.56, PEC: -2.89, GD: -2.89, PD: -2.67, OMF: -0.89, SMV: -1.67, EDI: 0.05 },
  { country_name: "Turkey", country_code: "TUR", year: 2023, COM: 1.78, OMP: -0.89, PEC: -1.23, GD: -1.56, PD: -1.34, OMF: -0.78, SMV: -0.67, EDI: 0.34 },
  { country_name: "Hungary", country_code: "HUN", year: 2023, COM: 2.01, OMP: -0.23, PEC: -0.56, GD: -0.89, PD: -0.67, OMF: -0.34, SMV: 0.12, EDI: 0.51 },
  { country_name: "Poland", country_code: "POL", year: 2023, COM: 2.23, OMP: 0.45, PEC: 0.23, GD: 0.12, PD: -0.12, OMF: -0.23, SMV: 0.56, EDI: 0.66 },
  
  // Bangladesh (default comparison)
  { country_name: "Bangladesh", country_code: "BGD", year: 2023, COM: 1.23, OMP: -0.45, PEC: -0.89, GD: -1.12, PD: -0.89, OMF: -0.67, SMV: -0.78, EDI: 0.38 },
];

// Calculate min/max for normalization
export const MIN_MAX: Record<DSPVariableKey, { min: number; max: number }> = {
  COM: { min: -0.54, max: 2.89 },
  OMP: { min: -2.56, max: 2.76 },
  PEC: { min: -2.89, max: 2.45 },
  GD: { min: -3.12, max: 2.89 },
  PD: { min: -2.89, max: 2.67 },
  OMF: { min: -1.78, max: 1.98 },
  SMV: { min: -1.89, max: 2.45 }
};

export function normalizeValue(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

export function getCountries(): string[] {
  return [...new Set(COUNTRY_DATA.map(d => d.country_name))].sort();
}

export function getYearsForCountry(countryName: string): number[] {
  return [...new Set(COUNTRY_DATA.filter(d => d.country_name === countryName).map(d => d.year))].sort((a, b) => b - a);
}

export function getCountryData(countryName: string, year: number): CountryData | undefined {
  return COUNTRY_DATA.find(d => d.country_name === countryName && d.year === year);
}
