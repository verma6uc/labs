import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { adminRoutes } from './adminRoutes';
import { authRoutes } from './authRoutes';
import { creatorRoutes } from './creatorRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
    errorElement: <ErrorBoundary />,
  },
  creatorRoutes,
  authRoutes,
  adminRoutes,
]);
