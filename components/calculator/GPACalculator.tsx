'use client';

import React from 'react';
import { ScaleSelector } from './ScaleSelector';
import { SemesterList } from './SemesterList';
import { ActionButtons } from './ActionButtons';
import { ResultDisplay } from './ResultDisplay';
import { useGPACalculator } from '@/hooks/useGPACalculator';

/**
 * Main calculator container component that orchestrates all calculator functionality
 */
export const GPACalculator: React.FC = () => {
  const {
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
  } = useGPACalculator();

  return (
    <div className="w-full max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-sm border-2 border-blue-200">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        GPA to CGPA Calculator
      </h1>

      <div className="space-y-6">
        <ScaleSelector scale={scale} onChange={handleScaleChange} />

        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Semester GPAs
          </h2>
          <SemesterList
            semesters={semesters}
            canDelete={semesters.length > 1}
            onGPAChange={handleGPAChange}
            onDelete={handleDeleteSemester}
          />
        </div>

        <ActionButtons
          canAddSemester={semesters.length < 12}
          onAddSemester={handleAddSemester}
          onCalculate={handleCalculate}
          isCalculated={isCalculated}
        />

        {error && (
          <div
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
            role="alert"
          >
            <p className="text-red-800">{error}</p>
          </div>
        )}

        {isCalculated && cgpa !== null && !error && (
          <ResultDisplay cgpa={cgpa} scale={scale} />
        )}
      </div>
    </div>
  );
};

