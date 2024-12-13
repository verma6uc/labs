import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { adminRoutes } from './adminRoutes';
import { authRoutes } from './authRoutes';
import { creatorRoutes } from './creatorRoutes';
import OnboardingFlow from '../pages/onboarding/OnboardingFlow';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'onboarding',
    element: <OnboardingFlow />,
    errorElement: <ErrorBoundary />,
  },
  creatorRoutes,
  authRoutes,
  adminRoutes,
]);
