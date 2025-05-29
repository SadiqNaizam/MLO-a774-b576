import React from 'react';
import MainAppLayout from '../../components/layout/MainAppLayout';
import LoginCard from '../../components/Auth/LoginCard';

/**
 * LoginPage displays the authentication form for users to log in.
 * It uses the MainAppLayout for overall page structure and centers the LoginCard component.
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default LoginPage;
