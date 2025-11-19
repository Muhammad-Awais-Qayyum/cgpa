import type { GPAScale, Semester } from '@/types/calculator';

/**
 * Calculates CGPA from an array of semester GPAs
 * Formula: CGPA = Σ(GPA of each semester) / Number of semesters
 * 
 * @param semesters - Array of semester objects with GPA values
 * @param scale - The GPA scale being used (for validation)
 * @returns The calculated CGPA rounded to 2 decimal places
 * @throws Error if no valid GPA values are found
 */
export function calculateCGPA(semesters: Semester[], scale: GPAScale): number {
  const validGPAs = semesters
    .map(s => ({ gpa: parseFloat(s.gpa), original: s.gpa }))
    .filter(({ gpa, original }) => !isNaN(gpa) && gpa >= 0 && gpa <= scale && original.trim() !== '')
    .map(({ gpa }) => gpa);

  if (validGPAs.length === 0) {
    throw new Error('No valid GPA values entered');
  }

  const sum = validGPAs.reduce((acc, gpa) => acc + gpa, 0);
  return Math.round((sum / validGPAs.length) * 100) / 100;
}

