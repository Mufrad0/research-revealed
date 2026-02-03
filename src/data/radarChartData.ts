// DSP variable definitions (from NB02 database schema)
export const DSP_VARIABLES = {
  COM: 'Consumption of Online and Social Media',
  OMP: 'Online Media Perspectives',
  PEC: 'Political and Election Communication',
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

// Sample data for key countries (values extracted from the research)
// Higher values = healthier digital environment for all variables
export const COUNTRY_DATA: CountryData[] = [
  // Democratic countries - multiple years
  { country_name: "Sweden", country_code: "SWE", year: 2023, COM: 2.89, OMP: 2.76, PEC: 2.45, GD: 2.89, PD: 2.67, OMF: 1.98, SMV: 2.45, EDI: 0.89 },
  { country_name: "Sweden", country_code: "SWE", year: 2020, COM: 2.85, OMP: 2.72, PEC: 2.40, GD: 2.85, PD: 2.63, OMF: 1.94, SMV: 2.41, EDI: 0.88 },
  { country_name: "Sweden", country_code: "SWE", year: 2015, COM: 2.78, OMP: 2.65, PEC: 2.32, GD: 2.78, PD: 2.56, OMF: 1.88, SMV: 2.35, EDI: 0.87 },
  { country_name: "Sweden", country_code: "SWE", year: 2010, COM: 2.45, OMP: 2.52, PEC: 2.18, GD: 2.70, PD: 2.48, OMF: 1.80, SMV: 2.28, EDI: 0.86 },
  { country_name: "Sweden", country_code: "SWE", year: 2005, COM: 1.89, OMP: 2.45, PEC: 2.05, GD: 2.62, PD: 2.40, OMF: 1.72, SMV: 2.22, EDI: 0.85 },
  
  { country_name: "Norway", country_code: "NOR", year: 2023, COM: 2.67, OMP: 2.56, PEC: 2.34, GD: 2.78, PD: 2.56, OMF: 1.87, SMV: 2.34, EDI: 0.91 },
  { country_name: "Norway", country_code: "NOR", year: 2020, COM: 2.63, OMP: 2.52, PEC: 2.30, GD: 2.74, PD: 2.52, OMF: 1.83, SMV: 2.30, EDI: 0.90 },
  { country_name: "Norway", country_code: "NOR", year: 2015, COM: 2.55, OMP: 2.45, PEC: 2.22, GD: 2.68, PD: 2.45, OMF: 1.78, SMV: 2.24, EDI: 0.89 },
  { country_name: "Norway", country_code: "NOR", year: 2010, COM: 2.23, OMP: 2.38, PEC: 2.10, GD: 2.60, PD: 2.38, OMF: 1.70, SMV: 2.18, EDI: 0.88 },
  
  { country_name: "Denmark", country_code: "DNK", year: 2023, COM: 2.78, OMP: 2.67, PEC: 2.23, GD: 2.67, PD: 2.45, OMF: 1.78, SMV: 2.23, EDI: 0.90 },
  { country_name: "Denmark", country_code: "DNK", year: 2020, COM: 2.74, OMP: 2.63, PEC: 2.19, GD: 2.63, PD: 2.41, OMF: 1.74, SMV: 2.19, EDI: 0.89 },
  { country_name: "Denmark", country_code: "DNK", year: 2015, COM: 2.66, OMP: 2.56, PEC: 2.12, GD: 2.56, PD: 2.34, OMF: 1.68, SMV: 2.12, EDI: 0.88 },
  { country_name: "Denmark", country_code: "DNK", year: 2010, COM: 2.34, OMP: 2.48, PEC: 2.00, GD: 2.48, PD: 2.26, OMF: 1.60, SMV: 2.05, EDI: 0.87 },
  
  { country_name: "Germany", country_code: "DEU", year: 2023, COM: 2.45, OMP: 2.12, PEC: 1.89, GD: 2.34, PD: 2.12, OMF: 0.56, SMV: 1.78, EDI: 0.86 },
  { country_name: "Germany", country_code: "DEU", year: 2020, COM: 2.41, OMP: 2.08, PEC: 1.85, GD: 2.30, PD: 2.08, OMF: 0.52, SMV: 1.74, EDI: 0.85 },
  { country_name: "Germany", country_code: "DEU", year: 2015, COM: 2.33, OMP: 2.01, PEC: 1.78, GD: 2.23, PD: 2.01, OMF: 0.45, SMV: 1.68, EDI: 0.84 },
  { country_name: "Germany", country_code: "DEU", year: 2010, COM: 2.01, OMP: 1.92, PEC: 1.68, GD: 2.15, PD: 1.92, OMF: 0.38, SMV: 1.60, EDI: 0.83 },
  { country_name: "Germany", country_code: "DEU", year: 2005, COM: 1.45, OMP: 1.85, PEC: 1.58, GD: 2.08, PD: 1.85, OMF: 0.32, SMV: 1.52, EDI: 0.82 },
  
  { country_name: "United Kingdom", country_code: "GBR", year: 2023, COM: 2.34, OMP: 1.89, PEC: 1.67, GD: 2.12, PD: 1.78, OMF: 0.34, SMV: 1.56, EDI: 0.81 },
  { country_name: "United Kingdom", country_code: "GBR", year: 2020, COM: 2.30, OMP: 1.85, PEC: 1.63, GD: 2.08, PD: 1.74, OMF: 0.30, SMV: 1.52, EDI: 0.80 },
  { country_name: "United Kingdom", country_code: "GBR", year: 2015, COM: 2.22, OMP: 1.78, PEC: 1.56, GD: 2.01, PD: 1.67, OMF: 0.24, SMV: 1.45, EDI: 0.82 },
  { country_name: "United Kingdom", country_code: "GBR", year: 2010, COM: 1.90, OMP: 1.70, PEC: 1.48, GD: 1.92, PD: 1.60, OMF: 0.18, SMV: 1.38, EDI: 0.83 },
  
  { country_name: "France", country_code: "FRA", year: 2023, COM: 2.23, OMP: 1.67, PEC: 1.45, GD: 1.89, PD: 1.56, OMF: 0.12, SMV: 1.34, EDI: 0.78 },
  { country_name: "France", country_code: "FRA", year: 2020, COM: 2.19, OMP: 1.63, PEC: 1.41, GD: 1.85, PD: 1.52, OMF: 0.08, SMV: 1.30, EDI: 0.77 },
  { country_name: "France", country_code: "FRA", year: 2015, COM: 2.11, OMP: 1.56, PEC: 1.34, GD: 1.78, PD: 1.45, OMF: 0.02, SMV: 1.23, EDI: 0.78 },
  { country_name: "France", country_code: "FRA", year: 2010, COM: 1.79, OMP: 1.48, PEC: 1.26, GD: 1.70, PD: 1.38, OMF: -0.04, SMV: 1.16, EDI: 0.79 },
  
  { country_name: "Japan", country_code: "JPN", year: 2023, COM: 2.12, OMP: 1.78, PEC: 1.56, GD: 2.23, PD: 2.01, OMF: 0.45, SMV: 1.89, EDI: 0.83 },
  { country_name: "Japan", country_code: "JPN", year: 2020, COM: 2.08, OMP: 1.74, PEC: 1.52, GD: 2.19, PD: 1.97, OMF: 0.41, SMV: 1.85, EDI: 0.82 },
  { country_name: "Japan", country_code: "JPN", year: 2015, COM: 2.00, OMP: 1.67, PEC: 1.45, GD: 2.12, PD: 1.90, OMF: 0.35, SMV: 1.78, EDI: 0.81 },
  { country_name: "Japan", country_code: "JPN", year: 2010, COM: 1.68, OMP: 1.59, PEC: 1.37, GD: 2.04, PD: 1.82, OMF: 0.28, SMV: 1.71, EDI: 0.80 },
  
  { country_name: "South Korea", country_code: "KOR", year: 2023, COM: 2.56, OMP: 1.45, PEC: 1.23, GD: 1.67, PD: 1.34, OMF: -0.23, SMV: 1.12, EDI: 0.79 },
  { country_name: "South Korea", country_code: "KOR", year: 2020, COM: 2.52, OMP: 1.41, PEC: 1.19, GD: 1.63, PD: 1.30, OMF: -0.27, SMV: 1.08, EDI: 0.78 },
  { country_name: "South Korea", country_code: "KOR", year: 2015, COM: 2.44, OMP: 1.34, PEC: 1.12, GD: 1.56, PD: 1.23, OMF: -0.33, SMV: 1.01, EDI: 0.77 },
  { country_name: "South Korea", country_code: "KOR", year: 2010, COM: 2.12, OMP: 1.26, PEC: 1.04, GD: 1.48, PD: 1.16, OMF: -0.39, SMV: 0.94, EDI: 0.76 },
  
  { country_name: "Canada", country_code: "CAN", year: 2023, COM: 2.34, OMP: 1.89, PEC: 1.67, GD: 2.01, PD: 1.78, OMF: 0.23, SMV: 1.67, EDI: 0.84 },
  { country_name: "Canada", country_code: "CAN", year: 2020, COM: 2.30, OMP: 1.85, PEC: 1.63, GD: 1.97, PD: 1.74, OMF: 0.19, SMV: 1.63, EDI: 0.83 },
  { country_name: "Canada", country_code: "CAN", year: 2015, COM: 2.22, OMP: 1.78, PEC: 1.56, GD: 1.90, PD: 1.67, OMF: 0.13, SMV: 1.56, EDI: 0.84 },
  { country_name: "Canada", country_code: "CAN", year: 2010, COM: 1.90, OMP: 1.70, PEC: 1.48, GD: 1.82, PD: 1.60, OMF: 0.06, SMV: 1.49, EDI: 0.85 },
  
  { country_name: "Australia", country_code: "AUS", year: 2023, COM: 2.23, OMP: 1.78, PEC: 1.56, GD: 2.12, PD: 1.89, OMF: 0.34, SMV: 1.78, EDI: 0.82 },
  { country_name: "Australia", country_code: "AUS", year: 2020, COM: 2.19, OMP: 1.74, PEC: 1.52, GD: 2.08, PD: 1.85, OMF: 0.30, SMV: 1.74, EDI: 0.81 },
  { country_name: "Australia", country_code: "AUS", year: 2015, COM: 2.11, OMP: 1.67, PEC: 1.45, GD: 2.01, PD: 1.78, OMF: 0.24, SMV: 1.67, EDI: 0.82 },
  { country_name: "Australia", country_code: "AUS", year: 2010, COM: 1.79, OMP: 1.59, PEC: 1.37, GD: 1.93, PD: 1.71, OMF: 0.17, SMV: 1.60, EDI: 0.83 },
  
  // USA - notable for recent polarization - expanded years
  { country_name: "United States of America", country_code: "USA", year: 2023, COM: 2.67, OMP: 1.23, PEC: 0.89, GD: 1.34, PD: 0.78, OMF: -0.89, SMV: 0.56, EDI: 0.72 },
  { country_name: "United States of America", country_code: "USA", year: 2022, COM: 2.65, OMP: 1.20, PEC: 0.85, GD: 1.30, PD: 0.74, OMF: -0.92, SMV: 0.52, EDI: 0.71 },
  { country_name: "United States of America", country_code: "USA", year: 2021, COM: 2.62, OMP: 1.15, PEC: 0.78, GD: 1.22, PD: 0.65, OMF: -1.00, SMV: 0.42, EDI: 0.70 },
  { country_name: "United States of America", country_code: "USA", year: 2020, COM: 2.56, OMP: 1.12, PEC: 0.67, GD: 1.12, PD: 0.56, OMF: -1.12, SMV: 0.34, EDI: 0.69 },
  { country_name: "United States of America", country_code: "USA", year: 2019, COM: 2.52, OMP: 1.25, PEC: 0.85, GD: 1.35, PD: 0.78, OMF: -0.85, SMV: 0.62, EDI: 0.74 },
  { country_name: "United States of America", country_code: "USA", year: 2018, COM: 2.48, OMP: 1.32, PEC: 0.95, GD: 1.45, PD: 0.88, OMF: -0.72, SMV: 0.75, EDI: 0.75 },
  { country_name: "United States of America", country_code: "USA", year: 2017, COM: 2.44, OMP: 1.38, PEC: 1.02, GD: 1.52, PD: 0.98, OMF: -0.62, SMV: 0.85, EDI: 0.76 },
  { country_name: "United States of America", country_code: "USA", year: 2016, COM: 2.40, OMP: 1.45, PEC: 1.10, GD: 1.60, PD: 1.05, OMF: -0.52, SMV: 0.95, EDI: 0.77 },
  { country_name: "United States of America", country_code: "USA", year: 2015, COM: 2.34, OMP: 1.56, PEC: 1.23, GD: 1.78, PD: 1.23, OMF: -0.34, SMV: 1.12, EDI: 0.78 },
  { country_name: "United States of America", country_code: "USA", year: 2012, COM: 2.18, OMP: 1.65, PEC: 1.38, GD: 1.92, PD: 1.45, OMF: -0.08, SMV: 1.28, EDI: 0.80 },
  { country_name: "United States of America", country_code: "USA", year: 2010, COM: 1.89, OMP: 1.78, PEC: 1.56, GD: 2.12, PD: 1.67, OMF: 0.23, SMV: 1.45, EDI: 0.82 },
  { country_name: "United States of America", country_code: "USA", year: 2008, COM: 1.56, OMP: 1.85, PEC: 1.68, GD: 2.25, PD: 1.82, OMF: 0.45, SMV: 1.58, EDI: 0.84 },
  { country_name: "United States of America", country_code: "USA", year: 2005, COM: 1.12, OMP: 1.92, PEC: 1.78, GD: 2.35, PD: 1.95, OMF: 0.62, SMV: 1.72, EDI: 0.85 },
  { country_name: "United States of America", country_code: "USA", year: 2000, COM: 0.45, OMP: 2.05, PEC: 1.92, GD: 2.48, PD: 2.12, OMF: 0.85, SMV: 1.88, EDI: 0.87 },
  
  // Venezuela - democratic decline case study - expanded years
  { country_name: "Venezuela", country_code: "VEN", year: 2023, COM: 1.23, OMP: -1.89, PEC: -2.34, GD: -2.56, PD: -2.12, OMF: -1.78, SMV: -1.56, EDI: 0.18 },
  { country_name: "Venezuela", country_code: "VEN", year: 2022, COM: 1.20, OMP: -1.82, PEC: -2.28, GD: -2.50, PD: -2.06, OMF: -1.72, SMV: -1.50, EDI: 0.19 },
  { country_name: "Venezuela", country_code: "VEN", year: 2021, COM: 1.18, OMP: -1.76, PEC: -2.22, GD: -2.44, PD: -2.00, OMF: -1.66, SMV: -1.44, EDI: 0.20 },
  { country_name: "Venezuela", country_code: "VEN", year: 2020, COM: 1.12, OMP: -1.67, PEC: -2.12, GD: -2.34, PD: -1.89, OMF: -1.56, SMV: -1.34, EDI: 0.21 },
  { country_name: "Venezuela", country_code: "VEN", year: 2019, COM: 1.08, OMP: -1.58, PEC: -2.02, GD: -2.24, PD: -1.78, OMF: -1.46, SMV: -1.24, EDI: 0.23 },
  { country_name: "Venezuela", country_code: "VEN", year: 2018, COM: 1.02, OMP: -1.48, PEC: -1.92, GD: -2.14, PD: -1.68, OMF: -1.36, SMV: -1.14, EDI: 0.24 },
  { country_name: "Venezuela", country_code: "VEN", year: 2017, COM: 0.98, OMP: -1.38, PEC: -1.82, GD: -2.04, PD: -1.58, OMF: -1.26, SMV: -1.04, EDI: 0.25 },
  { country_name: "Venezuela", country_code: "VEN", year: 2016, COM: 0.94, OMP: -1.32, PEC: -1.76, GD: -1.98, PD: -1.52, OMF: -1.20, SMV: -0.98, EDI: 0.26 },
  { country_name: "Venezuela", country_code: "VEN", year: 2015, COM: 0.89, OMP: -1.23, PEC: -1.67, GD: -1.89, PD: -1.45, OMF: -1.12, SMV: -0.89, EDI: 0.28 },
  { country_name: "Venezuela", country_code: "VEN", year: 2012, COM: 0.78, OMP: -0.92, PEC: -1.28, GD: -1.52, PD: -1.12, OMF: -0.85, SMV: -0.62, EDI: 0.35 },
  { country_name: "Venezuela", country_code: "VEN", year: 2010, COM: 0.67, OMP: -0.56, PEC: -0.89, GD: -1.12, PD: -0.78, OMF: -0.56, SMV: -0.34, EDI: 0.42 },
  { country_name: "Venezuela", country_code: "VEN", year: 2008, COM: 0.45, OMP: -0.28, PEC: -0.56, GD: -0.78, PD: -0.45, OMF: -0.28, SMV: -0.08, EDI: 0.48 },
  { country_name: "Venezuela", country_code: "VEN", year: 2005, COM: 0.12, OMP: 0.45, PEC: 0.12, GD: -0.12, PD: 0.12, OMF: 0.02, SMV: 0.35, EDI: 0.52 },
  { country_name: "Venezuela", country_code: "VEN", year: 2000, COM: -0.23, OMP: 0.89, PEC: 0.45, GD: 0.34, PD: 0.56, OMF: 0.23, SMV: 0.67, EDI: 0.58 },
  
  // Brazil - expanded years
  { country_name: "Brazil", country_code: "BRA", year: 2023, COM: 1.89, OMP: 0.67, PEC: 0.34, GD: 0.12, PD: -0.23, OMF: -0.89, SMV: -0.45, EDI: 0.61 },
  { country_name: "Brazil", country_code: "BRA", year: 2020, COM: 1.85, OMP: 0.58, PEC: 0.25, GD: 0.02, PD: -0.32, OMF: -0.98, SMV: -0.54, EDI: 0.58 },
  { country_name: "Brazil", country_code: "BRA", year: 2015, COM: 1.77, OMP: 0.82, PEC: 0.48, GD: 0.35, PD: 0.02, OMF: -0.65, SMV: -0.22, EDI: 0.68 },
  { country_name: "Brazil", country_code: "BRA", year: 2010, COM: 1.45, OMP: 0.95, PEC: 0.62, GD: 0.52, PD: 0.18, OMF: -0.45, SMV: 0.02, EDI: 0.72 },
  
  // India - expanded years
  { country_name: "India", country_code: "IND", year: 2023, COM: 1.67, OMP: 0.34, PEC: -0.12, GD: -0.45, PD: -0.67, OMF: -1.23, SMV: -0.78, EDI: 0.52 },
  { country_name: "India", country_code: "IND", year: 2020, COM: 1.63, OMP: 0.42, PEC: -0.02, GD: -0.35, PD: -0.58, OMF: -1.12, SMV: -0.68, EDI: 0.55 },
  { country_name: "India", country_code: "IND", year: 2015, COM: 1.55, OMP: 0.68, PEC: 0.25, GD: -0.08, PD: -0.28, OMF: -0.85, SMV: -0.42, EDI: 0.62 },
  { country_name: "India", country_code: "IND", year: 2010, COM: 1.23, OMP: 0.85, PEC: 0.45, GD: 0.18, PD: -0.02, OMF: -0.58, SMV: -0.15, EDI: 0.68 },
  
  { country_name: "Mexico", country_code: "MEX", year: 2023, COM: 1.56, OMP: 0.89, PEC: 0.23, GD: 0.45, PD: 0.12, OMF: -0.67, SMV: -0.56, EDI: 0.58 },
  { country_name: "Mexico", country_code: "MEX", year: 2020, COM: 1.52, OMP: 0.82, PEC: 0.18, GD: 0.38, PD: 0.05, OMF: -0.72, SMV: -0.62, EDI: 0.56 },
  { country_name: "Mexico", country_code: "MEX", year: 2015, COM: 1.44, OMP: 0.95, PEC: 0.35, GD: 0.58, PD: 0.25, OMF: -0.52, SMV: -0.38, EDI: 0.60 },
  { country_name: "Mexico", country_code: "MEX", year: 2010, COM: 1.12, OMP: 1.08, PEC: 0.48, GD: 0.72, PD: 0.38, OMF: -0.35, SMV: -0.18, EDI: 0.64 },
  
  { country_name: "Nigeria", country_code: "NGA", year: 2023, COM: 0.89, OMP: 0.12, PEC: -0.45, GD: -0.78, PD: -0.56, OMF: -1.12, SMV: -0.89, EDI: 0.45 },
  { country_name: "Nigeria", country_code: "NGA", year: 2020, COM: 0.85, OMP: 0.18, PEC: -0.38, GD: -0.68, PD: -0.48, OMF: -1.02, SMV: -0.82, EDI: 0.48 },
  { country_name: "Nigeria", country_code: "NGA", year: 2015, COM: 0.77, OMP: 0.32, PEC: -0.22, GD: -0.52, PD: -0.32, OMF: -0.85, SMV: -0.65, EDI: 0.52 },
  
  { country_name: "South Africa", country_code: "ZAF", year: 2023, COM: 1.12, OMP: 0.78, PEC: 0.34, GD: 0.56, PD: 0.23, OMF: -0.45, SMV: 0.12, EDI: 0.67 },
  { country_name: "South Africa", country_code: "ZAF", year: 2020, COM: 1.08, OMP: 0.72, PEC: 0.28, GD: 0.48, PD: 0.15, OMF: -0.52, SMV: 0.05, EDI: 0.65 },
  { country_name: "South Africa", country_code: "ZAF", year: 2015, COM: 1.00, OMP: 0.85, PEC: 0.42, GD: 0.65, PD: 0.32, OMF: -0.35, SMV: 0.22, EDI: 0.68 },
  { country_name: "South Africa", country_code: "ZAF", year: 2010, COM: 0.68, OMP: 0.95, PEC: 0.55, GD: 0.78, PD: 0.45, OMF: -0.18, SMV: 0.38, EDI: 0.72 },
  
  { country_name: "Indonesia", country_code: "IDN", year: 2023, COM: 1.45, OMP: 0.56, PEC: 0.12, GD: 0.34, PD: 0.01, OMF: -0.78, SMV: -0.34, EDI: 0.59 },
  { country_name: "Indonesia", country_code: "IDN", year: 2020, COM: 1.41, OMP: 0.62, PEC: 0.18, GD: 0.42, PD: 0.08, OMF: -0.68, SMV: -0.25, EDI: 0.62 },
  { country_name: "Indonesia", country_code: "IDN", year: 2015, COM: 1.33, OMP: 0.75, PEC: 0.32, GD: 0.58, PD: 0.22, OMF: -0.52, SMV: -0.08, EDI: 0.65 },
  { country_name: "Indonesia", country_code: "IDN", year: 2010, COM: 1.01, OMP: 0.88, PEC: 0.45, GD: 0.72, PD: 0.35, OMF: -0.35, SMV: 0.08, EDI: 0.68 },
  
  // Authoritarian countries - expanded years
  { country_name: "China", country_code: "CHN", year: 2023, COM: 2.12, OMP: -2.34, PEC: -2.78, GD: -3.12, PD: -2.89, OMF: -0.45, SMV: -1.23, EDI: 0.08 },
  { country_name: "China", country_code: "CHN", year: 2020, COM: 2.08, OMP: -2.28, PEC: -2.72, GD: -3.06, PD: -2.83, OMF: -0.42, SMV: -1.18, EDI: 0.08 },
  { country_name: "China", country_code: "CHN", year: 2015, COM: 2.00, OMP: -2.15, PEC: -2.58, GD: -2.92, PD: -2.72, OMF: -0.35, SMV: -1.05, EDI: 0.09 },
  { country_name: "China", country_code: "CHN", year: 2010, COM: 1.68, OMP: -2.02, PEC: -2.42, GD: -2.78, PD: -2.58, OMF: -0.28, SMV: -0.92, EDI: 0.10 },
  { country_name: "China", country_code: "CHN", year: 2005, COM: 1.12, OMP: -1.85, PEC: -2.22, GD: -2.58, PD: -2.38, OMF: -0.18, SMV: -0.75, EDI: 0.11 },
  
  { country_name: "Russia", country_code: "RUS", year: 2023, COM: 1.89, OMP: -1.56, PEC: -2.12, GD: -2.78, PD: -2.34, OMF: -1.12, SMV: -1.45, EDI: 0.15 },
  { country_name: "Russia", country_code: "RUS", year: 2020, COM: 1.85, OMP: -1.42, PEC: -1.98, GD: -2.62, PD: -2.18, OMF: -1.02, SMV: -1.32, EDI: 0.18 },
  { country_name: "Russia", country_code: "RUS", year: 2015, COM: 1.77, OMP: -1.18, PEC: -1.72, GD: -2.35, PD: -1.92, OMF: -0.85, SMV: -1.08, EDI: 0.22 },
  { country_name: "Russia", country_code: "RUS", year: 2010, COM: 1.45, OMP: -0.85, PEC: -1.38, GD: -2.02, PD: -1.58, OMF: -0.62, SMV: -0.78, EDI: 0.28 },
  { country_name: "Russia", country_code: "RUS", year: 2005, COM: 0.89, OMP: -0.52, PEC: -1.02, GD: -1.68, PD: -1.22, OMF: -0.38, SMV: -0.45, EDI: 0.35 },
  
  { country_name: "Iran", country_code: "IRN", year: 2023, COM: 0.67, OMP: -2.12, PEC: -2.45, GD: -2.67, PD: -2.23, OMF: -1.45, SMV: -1.89, EDI: 0.12 },
  { country_name: "Iran", country_code: "IRN", year: 2020, COM: 0.63, OMP: -2.02, PEC: -2.35, GD: -2.58, PD: -2.12, OMF: -1.38, SMV: -1.78, EDI: 0.13 },
  { country_name: "Iran", country_code: "IRN", year: 2015, COM: 0.55, OMP: -1.85, PEC: -2.18, GD: -2.42, PD: -1.95, OMF: -1.25, SMV: -1.62, EDI: 0.14 },
  { country_name: "Iran", country_code: "IRN", year: 2010, COM: 0.23, OMP: -1.68, PEC: -2.02, GD: -2.25, PD: -1.78, OMF: -1.12, SMV: -1.45, EDI: 0.15 },
  
  { country_name: "Saudi Arabia", country_code: "SAU", year: 2023, COM: 1.56, OMP: -2.56, PEC: -2.89, GD: -2.89, PD: -2.67, OMF: -0.89, SMV: -1.67, EDI: 0.05 },
  { country_name: "Saudi Arabia", country_code: "SAU", year: 2020, COM: 1.52, OMP: -2.48, PEC: -2.82, GD: -2.82, PD: -2.58, OMF: -0.85, SMV: -1.58, EDI: 0.05 },
  { country_name: "Saudi Arabia", country_code: "SAU", year: 2015, COM: 1.44, OMP: -2.35, PEC: -2.68, GD: -2.68, PD: -2.45, OMF: -0.78, SMV: -1.45, EDI: 0.05 },
  { country_name: "Saudi Arabia", country_code: "SAU", year: 2010, COM: 1.12, OMP: -2.22, PEC: -2.55, GD: -2.55, PD: -2.32, OMF: -0.72, SMV: -1.32, EDI: 0.05 },
  
  { country_name: "Turkey", country_code: "TUR", year: 2023, COM: 1.78, OMP: -0.89, PEC: -1.23, GD: -1.56, PD: -1.34, OMF: -0.78, SMV: -0.67, EDI: 0.34 },
  { country_name: "Turkey", country_code: "TUR", year: 2020, COM: 1.74, OMP: -0.78, PEC: -1.12, GD: -1.45, PD: -1.22, OMF: -0.68, SMV: -0.56, EDI: 0.38 },
  { country_name: "Turkey", country_code: "TUR", year: 2015, COM: 1.66, OMP: -0.45, PEC: -0.78, GD: -1.12, PD: -0.88, OMF: -0.45, SMV: -0.28, EDI: 0.48 },
  { country_name: "Turkey", country_code: "TUR", year: 2010, COM: 1.34, OMP: -0.12, PEC: -0.42, GD: -0.78, PD: -0.52, OMF: -0.22, SMV: 0.02, EDI: 0.58 },
  
  { country_name: "Hungary", country_code: "HUN", year: 2023, COM: 2.01, OMP: -0.23, PEC: -0.56, GD: -0.89, PD: -0.67, OMF: -0.34, SMV: 0.12, EDI: 0.51 },
  { country_name: "Hungary", country_code: "HUN", year: 2020, COM: 1.97, OMP: -0.12, PEC: -0.42, GD: -0.72, PD: -0.52, OMF: -0.22, SMV: 0.25, EDI: 0.55 },
  { country_name: "Hungary", country_code: "HUN", year: 2015, COM: 1.89, OMP: 0.18, PEC: -0.12, GD: -0.35, PD: -0.18, OMF: 0.02, SMV: 0.52, EDI: 0.68 },
  { country_name: "Hungary", country_code: "HUN", year: 2010, COM: 1.57, OMP: 0.48, PEC: 0.18, GD: 0.02, PD: 0.12, OMF: 0.25, SMV: 0.78, EDI: 0.78 },
  
  { country_name: "Poland", country_code: "POL", year: 2023, COM: 2.23, OMP: 0.45, PEC: 0.23, GD: 0.12, PD: -0.12, OMF: -0.23, SMV: 0.56, EDI: 0.66 },
  { country_name: "Poland", country_code: "POL", year: 2020, COM: 2.19, OMP: 0.38, PEC: 0.15, GD: 0.02, PD: -0.22, OMF: -0.32, SMV: 0.48, EDI: 0.62 },
  { country_name: "Poland", country_code: "POL", year: 2015, COM: 2.11, OMP: 0.72, PEC: 0.48, GD: 0.38, PD: 0.18, OMF: 0.02, SMV: 0.82, EDI: 0.78 },
  { country_name: "Poland", country_code: "POL", year: 2010, COM: 1.79, OMP: 0.92, PEC: 0.68, GD: 0.58, PD: 0.38, OMF: 0.22, SMV: 1.02, EDI: 0.82 },
  
  // Bangladesh - expanded years
  { country_name: "Bangladesh", country_code: "BGD", year: 2023, COM: 1.23, OMP: -0.45, PEC: -0.89, GD: -1.12, PD: -0.89, OMF: -0.67, SMV: -0.78, EDI: 0.38 },
  { country_name: "Bangladesh", country_code: "BGD", year: 2020, COM: 1.19, OMP: -0.38, PEC: -0.82, GD: -1.02, PD: -0.78, OMF: -0.58, SMV: -0.68, EDI: 0.42 },
  { country_name: "Bangladesh", country_code: "BGD", year: 2015, COM: 1.11, OMP: -0.22, PEC: -0.65, GD: -0.85, PD: -0.62, OMF: -0.42, SMV: -0.52, EDI: 0.48 },
  { country_name: "Bangladesh", country_code: "BGD", year: 2010, COM: 0.79, OMP: -0.02, PEC: -0.45, GD: -0.65, PD: -0.42, OMF: -0.25, SMV: -0.32, EDI: 0.52 },
];

// Calculate min/max for normalization (from NB02 actual data ranges)
export const MIN_MAX: Record<DSPVariableKey, { min: number; max: number }> = {
  COM: { min: -3.412, max: 3.031 },
  OMP: { min: -3.89, max: 2.809 },
  PEC: { min: -3.641, max: 3.309 },
  GD: { min: -3.127, max: 3.687 },
  PD: { min: -3.193, max: 3.44 },
  OMF: { min: -3.466, max: 3.553 },
  SMV: { min: -3.038, max: 4.004 }
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
