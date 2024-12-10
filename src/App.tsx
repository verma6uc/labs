import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as CustomThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// Auth Pages
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import SystemSettings from './pages/admin/SystemSettings';
import SecurityAudit from './pages/admin/SecurityAudit';
import Analytics from './pages/admin/Analytics';
import LiveSessions from './pages/admin/LiveSessions';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/auth/login" replace />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
      {
        path: 'user-management',
        element: <UserManagement />,
      },
      {
        path: 'live-sessions',
        element: <LiveSessions />,
      },
      {
        path: 'security-audit',
        element: <SecurityAudit />,
      },
      {
        path: 'settings',
        element: <SystemSettings />,
      },
    ],
  },
]);

const App: React.FC = () => {
  useEffect(() => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <CustomThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </CustomThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
