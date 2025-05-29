import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InputField from './InputField';
import LoginButton from './LoginButton';
import ForgotPasswordLink from './ForgotPasswordLink';
import SignupLink from './SignupLink';

const LoginCard: React.FC = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  // const [error, setError] = React.useState<string | null>(null); // Optional: for displaying login errors

  const handleLogin = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // setError(null);
    console.log('Login attempt with:', { email, password });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Example error handling:
    // if (email !== 'test@example.com' || password !== 'password') {
    //   setError("Invalid email or password.");
    // } else {
    //   console.log('Login successful');
    //   // Handle successful login (e.g., redirect, update auth context)
    // }
    
    setIsLoading(false);
  }, [email, password]);

  const handleForgotPasswordClick = React.useCallback(() => {
    console.log("Forgot password clicked");
    // TODO: Implement navigation or modal display for forgot password
  }, []);

  const handleSignupClick = React.useCallback(() => {
    console.log("Signup link clicked");
    // TODO: Implement navigation to signup page
  }, []);

  return (
    <Card className={cn(
      "w-[360px] max-w-full bg-card text-card-foreground", // Sizing and base card styles
      "rounded-md shadow-md" // Consistent with layout requirements
    )}>
      <CardHeader className="pb-4 pt-6"> 
        <CardTitle className="text-2xl font-bold text-center text-foreground">
          Welcome
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-2">
        <form onSubmit={handleLogin} className="flex flex-col gap-5"> {/* Adjusted gap slightly for visual balance */}
          <InputField
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="email"
          />
          <InputField
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="current-password"
          />
          <div className="flex justify-end -mt-2"> {/* Minor adjustment for ForgotPasswordLink spacing */}
            <ForgotPasswordLink onClick={handleForgotPasswordClick} />
          </div>
          
          {/* {error && <p className="text-sm text-destructive text-center -mt-2 mb-2">{error}</p>} */} 

          <LoginButton type="submit" isLoading={isLoading} className="mt-3"> {/* Spacing for login button */}
            Login
          </LoginButton>
        </form>
        <SignupLink 
          onLinkClick={handleSignupClick} 
          className="mt-6" // Spacing from form elements to signup link
        />
      </CardContent>
    </Card>
  );
};

export default LoginCard;
