'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';

interface ActionButtonsProps {
  canAddSemester: boolean;
  onAddSemester: () => void;
  onCalculate: () => void;
  isCalculated: boolean;
}

/**
 * Component for Add Semester and Calculate CGPA action buttons
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  canAddSemester,
  onAddSemester,
  onCalculate,
  isCalculated,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button
        variant="secondary"
        onClick={onAddSemester}
        disabled={!canAddSemester}
        className="w-full sm:w-auto"
        aria-label="Add new semester"
      >
        Add Semester
      </Button>
      <Button
        variant="primary"
        onClick={onCalculate}
        className="w-full sm:w-auto flex-1"
        aria-label="Calculate CGPA"
      >
        {isCalculated ? 'Recalculate CGPA' : 'Calculate CGPA'}
      </Button>
    </div>
  );
};

