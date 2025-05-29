import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type = 'text',
  placeholder,
  className,
  error,
  disabled,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className="w-full">
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={cn(
          'w-full h-auto px-0.5 py-2.5', // Adjusted padding for better vertical centering & line feel
          'border-0 border-b border-input', // Only bottom border, uses Tailwind configured 'input' color for border
          'bg-transparent', // Transparent background to show card's color
          'text-base text-foreground placeholder:text-muted-foreground', // Text and placeholder styling
          'focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0', // Remove default focus ring for line style
          'focus:border-b-2 focus:border-primary', // Blue underline (2px thick) on focus using 'primary' color
          'disabled:opacity-70 disabled:cursor-not-allowed',
          'transition-colors duration-200 ease-in-out',
          'rounded-none', // No border radius for the line style
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default InputField;
