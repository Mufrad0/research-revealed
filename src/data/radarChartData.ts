// DSP variable definitions (matches Streamlit order)
export const DSP_VARIABLES = {
  COM: "Consumption of Online and Social Media",
  OMP: "Online Media Perspectives",
  PEC: "Political and Election Communication",
  GD: "Government Disinformation",
  PD: "Party Disinformation",
  OMF: "Online Media Fractionalization",
  SMV: "Social Media Violence",
} as const;

export type DSPVariableKey = keyof typeof DSP_VARIABLES;

export function normalizeValue(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

