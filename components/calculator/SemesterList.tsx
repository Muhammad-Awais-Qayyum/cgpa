'use client';

import React from 'react';
import { SemesterInput } from './SemesterInput';
import type { Semester } from '@/types/calculator';

interface SemesterListProps {
  semesters: Semester[];
  canDelete: boolean;
  onGPAChange: (id: string, value: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Container component for rendering the list of semester inputs
 */
export const SemesterList: React.FC<SemesterListProps> = ({
  semesters,
  canDelete,
  onGPAChange,
  onDelete,
}) => {
  return (
    <div className="space-y-4">
      {semesters.map((semester) => (
        <SemesterInput
          key={semester.id}
          id={semester.id}
          label={semester.label}
          value={semester.gpa}
          error={semester.error}
          canDelete={canDelete}
          onChange={onGPAChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

