'use client';

import React from 'react';
import { formatCGPADisplay } from '@/utils/formatters';
import type { GPAScale } from '@/types/calculator';

interface ResultDisplayProps {
  cgpa: number;
  scale: GPAScale;
}

/**
 * Component for displaying the calculated CGPA result
 */
export const ResultDisplay: React.FC<ResultDisplayProps> = ({ cgpa, scale }) => {
  return (
    <div
      className="mt-6 p-6 bg-blue-50 border-2 border-blue-300 rounded-lg animate-fade-in"
      role="status"
      aria-live="polite"
    >
      <h3 className="text-xl font-semibold text-blue-900 mb-2">
        {formatCGPADisplay(cgpa, scale)}
      </h3>
    </div>
  );
};

