import React from 'react';
import { Box, IconButton, Tooltip, Typography, useTheme } from '@mui/material';
import {
  People as PeopleIcon,
  Timer as TimerIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  ShowChart as ShowChartIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const QuickLinks: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const links = [
    {
      title: 'User Management',
      icon: <PeopleIcon />,
      path: '/admin/user-management',
      description: 'Manage Users & Roles',
    },
    {
      title: 'Live Sessions',
      icon: <TimerIcon />,
      path: '/admin/live-sessions',
      description: 'View Current Activity',
    },
    {
      title: 'Security Suite',
      icon: <SecurityIcon />,
      path: '/admin/security-suite',
      description: 'Configure Policies & Review Logs',
    },
    {
      title: 'System Settings',
      icon: <SettingsIcon />,
      path: '/admin/system-settings',
      description: 'Tweak Integrations & Environment',
    },
    {
      title: 'Metrics',
      icon: <ShowChartIcon />,
      path: '/admin/metrics',
      description: 'Performance & Analytics',
    },
  ];

  return (
    <Box sx={{
      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      borderRadius: 2,
      border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      p: 2,
    }}>
      <Typography variant="h6" sx={{ 
        color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
        fontWeight: 600,
        mb: 2,
      }}>
        Quick Access
      </Typography>
      <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}>
        {links.map((link) => (
          <Tooltip 
            key={link.path}
            title={link.description}
            placement="top"
          >
            <IconButton
              onClick={() => navigate(link.path)}
              sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                  color: '#3B82F6',
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0.5,
              }}
            >
              {link.icon}
              <Typography variant="caption" sx={{ fontSize: '0.625rem' }}>
                {link.title}
              </Typography>
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default QuickLinks;
