'use client';

import { useState, useCallback, useMemo } from 'react';
import type { GPAScale, Semester } from '@/types/calculator';
import { DEFAULT_SCALE, MAX_SEMESTERS, MIN_SEMESTERS, ERROR_MESSAGES } from '@/lib/constants';
import { validateGPA, validateForCalculation } from '@/lib/validation';
import { calculateCGPA } from '@/lib/calculations';

/**
 * Custom hook for managing GPA calculator state and logic
 */
export function useGPACalculator() {
  const [scale, setScale] = useState<GPAScale>(DEFAULT_SCALE);
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: '1', label: 'Semester 1', gpa: '' },
  ]);
  const [cgpa, setCgpa] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Generate a unique ID for new semesters
   */
  const generateSemesterId = useCallback(() => {
    const maxId = Math.max(...semesters.map(s => parseInt(s.id) || 0), 0);
    return (maxId + 1).toString();
  }, [semesters]);

  /**
   * Handle scale change and revalidate all inputs
   */
  const handleScaleChange = useCallback((newScale: GPAScale) => {
    setScale(newScale);
    setError(null);
    setIsCalculated(false);
    setCgpa(null);

    // Revalidate all semesters with new scale
    setSemesters(prev => prev.map(semester => {
      if (semester.gpa.trim() === '') {
        return { ...semester, error: undefined };
      }
      const validation = validateGPA(semester.gpa, newScale);
      return {
        ...semester,
        error: validation.isValid ? undefined : validation.error,
      };
    }));
  }, []);

  /**
   * Handle GPA input change for a specific semester
   */
  const handleGPAChange = useCallback((id: string, value: string) => {
    setError(null);
    setIsCalculated(false);
    setCgpa(null);

    // Validate the input
    const validation = validateGPA(value, scale);
    
    setSemesters(prev => prev.map(semester => {
      if (semester.id === id) {
        return {
          ...semester,
          gpa: value,
          error: validation.isValid ? undefined : validation.error,
        };
      }
      return semester;
    }));
  }, [scale]);

  /**
   * Add a new semester
   */
  const handleAddSemester = useCallback(() => {
    if (semesters.length >= MAX_SEMESTERS) {
      setError(ERROR_MESSAGES.MAX_SEMESTERS);
      return;
    }

    const newId = generateSemesterId();
    const newSemester: Semester = {
      id: newId,
      label: `Semester ${semesters.length + 1}`,
      gpa: '',
    };

    setSemesters(prev => [...prev, newSemester]);
    setError(null);
  }, [semesters.length, generateSemesterId]);

  /**
   * Delete a semester
   */
  const handleDeleteSemester = useCallback((id: string) => {
    if (semesters.length <= MIN_SEMESTERS) {
      setError(ERROR_MESSAGES.CANNOT_DELETE_LAST);
      return;
    }

    setSemesters(prev => prev.filter(s => s.id !== id).map((s, index) => ({
      ...s,
      label: `Semester ${index + 1}`,
    })));
    setError(null);
    setIsCalculated(false);
    setCgpa(null);
  }, [semesters.length]);

  /**
   * Calculate CGPA
   */
  const handleCalculate = useCallback(() => {
    setError(null);

    // Validate before calculation
    const validation = validateForCalculation(semesters);
    if (!validation.isValid) {
      setError(validation.error || 'Validation failed');
      setIsCalculated(false);
      setCgpa(null);
      return;
    }

    try {
      const result = calculateCGPA(semesters, scale);
      setCgpa(result);
      setIsCalculated(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Calculation failed';
      setError(errorMessage);
      setIsCalculated(false);
      setCgpa(null);
    }
  }, [semesters, scale]);

  return {
    scale,
    semesters,
    cgpa,
    isCalculated,
    error,
    handleScaleChange,
    handleGPAChange,
    handleAddSemester,
    handleDeleteSemester,
    handleCalculate,
  };
}

