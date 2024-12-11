import React from 'react';
import { RouteObject } from 'react-router-dom';
import CreatorLayout from '../layouts/CreatorLayout';
import CreatorDashboard from '../pages/creator/Dashboard';
import Projects from '../pages/creator/Projects';
import Blueprint from '../pages/creator/Blueprint';
import Metrics from '../pages/creator/Metrics';
import Integrations from '../pages/creator/Integrations';
import AIInsights from '../pages/creator/AIInsights';
import Feedback from '../pages/creator/Feedback';
import ErrorBoundary from '../components/ErrorBoundary';

export const creatorRoutes: RouteObject = {
  path: 'creator',
  element: <CreatorLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: '',
      element: <CreatorDashboard />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'dashboard',
      element: <CreatorDashboard />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'projects',
      element: <Projects />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'blueprint',
      element: <Blueprint />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'metrics',
      element: <Metrics />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'integrations',
      element: <Integrations />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'ai-insights',
      element: <AIInsights />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'feedback',
      element: <Feedback />,
      errorElement: <ErrorBoundary />,
    },
  ],
};
