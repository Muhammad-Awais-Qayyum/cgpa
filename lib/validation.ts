import type { GPAScale, ValidationResult, Semester } from '@/types/calculator';
import { ERROR_MESSAGES } from './constants';

/**
 * Validates a single GPA value against the selected scale
 */
export function validateGPA(value: string, scale: GPAScale): ValidationResult {
  // Allow empty values (they'll be excluded from calculation)
  if (value.trim() === '') {
    return { isValid: true };
  }

  const numValue = parseFloat(value);

  // Check if it's a valid number
  if (isNaN(numValue)) {
    return { isValid: false, error: ERROR_MESSAGES.INVALID_INPUT };
  }

  // Check if it's within the valid range
  if (numValue < 0 || numValue > scale) {
    return { isValid: false, error: ERROR_MESSAGES.OUT_OF_RANGE(scale) };
  }

  // Check decimal places (max 2)
  const decimalPlaces = (value.split('.')[1] || '').length;
  if (decimalPlaces > 2) {
    return { isValid: false, error: 'Maximum 2 decimal places allowed' };
  }

  return { isValid: true };
}

/**
 * Validates all semesters before calculation
 */
export function validateForCalculation(semesters: Semester[]): ValidationResult {
  // Check if at least one semester has a valid GPA
  const hasValidGPA = semesters.some(semester => {
    const gpa = parseFloat(semester.gpa);
    return !isNaN(gpa) && semester.gpa.trim() !== '';
  });

  if (!hasValidGPA) {
    return { isValid: false, error: ERROR_MESSAGES.EMPTY_CALCULATION };
  }

  // Check if all non-empty values are valid
  const invalidSemesters = semesters.filter(semester => {
    if (semester.gpa.trim() === '') return false; // Empty is OK
    return semester.error !== undefined;
  });

  if (invalidSemesters.length > 0) {
    return { isValid: false, error: 'Please fix all errors before calculating' };
  }

  return { isValid: true };
}

