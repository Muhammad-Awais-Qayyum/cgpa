import type { GPAScale } from '@/types/calculator';

export const GPA_SCALES: GPAScale[] = [4.0, 5.0, 10.0];

export const MAX_SEMESTERS = 12;
export const MIN_SEMESTERS = 1;

export const DEFAULT_SCALE: GPAScale = 4.0;

export const ERROR_MESSAGES = {
  EMPTY_CALCULATION: 'Please enter at least one semester GPA',
  OUT_OF_RANGE: (scale: number) => `GPA must be between 0.00 and ${scale.toFixed(1)}`,
  INVALID_INPUT: 'Please enter a valid number',
  MAX_SEMESTERS: 'Maximum 12 semesters allowed',
  CANNOT_DELETE_LAST: 'At least one semester is required',
} as const;

