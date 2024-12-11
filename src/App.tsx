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
import LiveSessions from './pages/admin/LiveSessions';

// Creator Pages
import CreatorLayout from './layouts/CreatorLayout';
import CreatorDashboard from './pages/creator/Dashboard';
import Projects from './pages/creator/Projects';
import Blueprint from './pages/creator/Blueprint';
import Metrics from './pages/creator/Metrics';
import Integrations from './pages/creator/Integrations';
import AIInsights from './pages/creator/AIInsights';
import Feedback from './pages/creator/Feedback';

// Static Pages
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Journey from './pages/Journey';
import Agents from './pages/Agents';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'features',
        element: <Features />,
      },
      {
        path: 'solutions',
        element: <Solutions />,
      },
      {
        path: 'journey',
        element: <Journey />,
      },
      {
        path: 'agents',
        element: <Agents />,
      },
      {
        path: 'pricing',
        element: <Pricing />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
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
        path: 'user-management',
        element: <UserManagement />,
      },
      {
        path: 'live-sessions',
        element: <LiveSessions />,
      },
      {
        path: 'system-settings',
        element: <SystemSettings />,
      },
      {
        path: 'security-audit',
        element: <SecurityAudit />,
      },
    ],
  },
  {
    path: 'creator',
    element: <CreatorLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <CreatorDashboard />,
      },
      {
        path: 'dashboard',
        element: <CreatorDashboard />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'blueprint',
        element: <Blueprint />,
      },
      {
        path: 'metrics',
        element: <Metrics />,
      },
      {
        path: 'integrations',
        element: <Integrations />,
      },
      {
        path: 'ai-insights',
        element: <AIInsights />,
      },
      {
        path: 'feedback',
        element: <Feedback />,
      },
    ],
  },
]);

function App() {
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
}

export default App;
