'use client';

import React from 'react';
import { Select } from '@/components/ui/Select';
import type { GPAScale } from '@/types/calculator';
import { GPA_SCALES } from '@/lib/constants';

interface ScaleSelectorProps {
  scale: GPAScale;
  onChange: (scale: GPAScale) => void;
}

/**
 * Component for selecting the GPA scale (4.0, 5.0, or 10.0)
 */
export const ScaleSelector: React.FC<ScaleSelectorProps> = ({ scale, onChange }) => {
  const options = GPA_SCALES.map(s => ({
    value: s.toString(),
    label: `${s.toFixed(1)} Scale`,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newScale = parseFloat(e.target.value) as GPAScale;
    onChange(newScale);
  };

  return (
    <Select
      label="GPA Scale"
      options={options}
      value={scale.toString()}
      onChange={handleChange}
      aria-label="Select GPA scale"
    />
  );
};

