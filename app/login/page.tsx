import { LoginForm } from '@/components';
import React, { FC } from 'react';

const LoginPage: FC = () => {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="rounded p-6 shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Login Page</h1>

        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
