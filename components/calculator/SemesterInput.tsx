'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

interface SemesterInputProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  canDelete: boolean;
  onChange: (id: string, value: string) => void;
  onDelete: (id: string) => void;
}

/**
 * Component for individual semester GPA input with delete functionality
 */
export const SemesterInput: React.FC<SemesterInputProps> = ({
  id,
  label,
  value,
  error,
  canDelete,
  onChange,
  onDelete,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex gap-4 items-start">
      <div className="flex-1">
        <Input
          id={id}
          label={label}
          value={value}
          error={error}
          onChange={handleChange}
          placeholder="0.00"
          aria-label={`${label} GPA input`}
        />
      </div>
      {canDelete && (
        <div className="pt-7">
          <Button
            variant="danger"
            onClick={handleDelete}
            className="px-4 py-2.5"
            aria-label={`Delete ${label}`}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

