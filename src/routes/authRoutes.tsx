import React from 'react';
import { RouteObject } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import ErrorBoundary from '../components/ErrorBoundary';

export const authRoutes: RouteObject = {
  path: 'auth',
  children: [
    {
      path: 'login',
      element: <Login />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'signup',
      element: <Signup />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'forgot-password',
      element: <ForgotPassword />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'reset-password',
      element: <ResetPassword />,
      errorElement: <ErrorBoundary />,
    },
  ],
};
