import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
}

/**
 * Reusable Input component with label and error handling
 */
export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="w-full">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        inputMode="decimal"
        className={`
          w-full border rounded-lg px-4 py-2.5
          focus:outline-none focus:ring-2 focus:ring-offset-0
          transition-colors
          ${error
            ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
            : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
          }
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
        {...props}
      />
      {error && (
        <p
          id={errorId}
          className="mt-1.5 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

