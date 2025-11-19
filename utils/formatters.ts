/**
 * Formats a number to 2 decimal places
 */
export function formatToTwoDecimals(value: number): string {
  return value.toFixed(2);
}

/**
 * Formats CGPA display text
 */
export function formatCGPADisplay(cgpa: number, scale: number): string {
  return `Your CGPA (Scale ${scale.toFixed(1)}) is: ${formatToTwoDecimals(cgpa)}`;
}

