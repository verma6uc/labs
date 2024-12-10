import React from 'react';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/admin/Dashboard';
import UserManagement from '../pages/admin/UserManagement';
import SystemSettings from '../pages/admin/SystemSettings';
import SecurityAudit from '../pages/admin/SecurityAudit';
import Analytics from '../pages/admin/Analytics';
import LiveSessions from '../pages/admin/LiveSessions';
import ErrorBoundary from '../components/ErrorBoundary';

export const adminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  errorElement: <ErrorBoundary />,
  children: [
    {
      path: '',
      element: <Dashboard />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'analytics',
      element: <Analytics />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'user-management',
      element: <UserManagement />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'live-sessions',
      element: <LiveSessions />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'security-audit',
      element: <SecurityAudit />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: 'settings',
      element: <SystemSettings />,
      errorElement: <ErrorBoundary />,
    },
  ],
};
