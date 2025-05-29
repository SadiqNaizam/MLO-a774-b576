import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ForgotPasswordLinkProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({
  href = '#',
  onClick,
  className,
}) => {
  const content = "Forgot Password";
  const commonLinkClasses = cn(
    'p-0 h-auto text-sm text-muted-foreground hover:text-primary hover:no-underline font-medium',
    className
  );

  if (onClick) {
    return (
      <Button
        variant="link"
        onClick={onClick}
        className={commonLinkClasses}
      >
        {content}
      </Button>
    );
  }

  return (
    <Button
      variant="link"
      asChild
      className={commonLinkClasses}
    >
      <a href={href}>{content}</a>
    </Button>
  );
};

export default ForgotPasswordLink;
