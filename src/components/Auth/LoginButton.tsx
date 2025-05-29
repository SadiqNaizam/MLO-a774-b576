import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  children,
  className,
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <Button
      type="submit"
      className={cn(
        'w-full bg-primary text-primary-foreground hover:bg-primary/90',
        'rounded-full py-2.5 text-sm font-semibold',
        className
      )}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? 'Logging in...' : children}
    </Button>
  );
};

export default LoginButton;
