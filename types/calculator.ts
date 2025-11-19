export type GPAScale = 4.0 | 5.0 | 10.0;

export interface Semester {
  id: string;
  label: string;
  gpa: string; // String for input handling, converted to number for calc
  error?: string;
}

export interface CalculatorState {
  scale: GPAScale;
  semesters: Semester[];
  cgpa: number | null;
  isCalculated: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

