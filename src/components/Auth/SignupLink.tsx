import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SignupLinkProps {
  href?: string;
  onLinkClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  baseText?: string;
  linkText?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({
  href = '#',
  onLinkClick,
  className,
  baseText = "Don't have an account?",
  linkText = "SignUp",
}) => {
  const commonLinkClasses = "p-0 h-auto text-sm text-primary hover:text-primary/90 underline font-medium";

  return (
    <p className={cn('text-sm text-center text-muted-foreground', className)}>
      {baseText}{' '}
      {onLinkClick ? (
        <Button
          variant="link"
          onClick={onLinkClick}
          className={commonLinkClasses}
        >
          {linkText}
        </Button>
      ) : (
        <Button
          variant="link"
          asChild
          className={commonLinkClasses}
        >
          <a href={href}>{linkText}</a>
        </Button>
      )}
    </p>
  );
};

export default SignupLink;
