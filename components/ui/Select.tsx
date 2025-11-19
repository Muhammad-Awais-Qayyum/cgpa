import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  id?: string;
}

/**
 * Reusable Select component with label
 */
export const Select: React.FC<SelectProps> = ({
  label,
  options,
  id,
  className = '',
  ...props
}) => {
  const selectId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="w-full">
      <label
        htmlFor={selectId}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>
      <select
        id={selectId}
        className={`
          w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors
          ${className}
        `}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

