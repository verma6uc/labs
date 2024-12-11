import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import HealthCard from '../../components/dashboard/HealthCard';
import ActivityFeed from '../../components/dashboard/ActivityFeed';
import QuickLinks from '../../components/dashboard/QuickLinks';
import { mockActivities } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const healthMetrics = [
    {
      title: 'System Uptime',
      value: '99.98%',
      subtitle: 'Last 24 hours',
      status: 'healthy' as const,
      trend: {
        value: 0.02,
        label: 'vs last week',
      },
    },
    {
      title: 'Active Sessions',
      value: '1,284',
      subtitle: 'Current users online',
      status: 'warning' as const,
      trend: {
        value: 12.5,
        label: 'vs average',
      },
    },
    {
      title: 'Critical Alerts',
      value: '2',
      subtitle: 'New in last 24h',
      status: 'error' as const,
    },
    {
      title: 'Integration Health',
      value: '3/4',
      subtitle: 'Systems operational',
      status: 'warning' as const,
    },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
    // Implement search functionality
  };

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {/* Welcome Banner */}
        <Grid item xs={12}>
          <WelcomeBanner 
            userName={user.name || 'Admin'}
            onSearch={handleSearch}
          />
        </Grid>

        {/* Health Metrics */}
        {healthMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HealthCard {...metric} />
          </Grid>
        ))}

        {/* User & Company Overview */}
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 3,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            height: '100%',
          }}>
            <Typography variant="h6" sx={{ 
              color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
              fontWeight: 600,
              mb: 2,
            }}>
              Platform Overview
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h3" sx={{ 
                  color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                  fontWeight: 600,
                }}>
                  2,481
                </Typography>
                <Typography sx={{ color: '#64748B' }}>Total Users</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h3" sx={{ 
                  color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                  fontWeight: 600,
                }}>
                  184
                </Typography>
                <Typography sx={{ color: '#64748B' }}>Active Projects</Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        {/* Activity Feed */}
        <Grid item xs={12} md={6}>
          <Box sx={{ height: '400px' }}>
            <ActivityFeed activities={mockActivities} />
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12}>
          <QuickLinks />
        </Grid>

        {/* Maintenance Notice */}
        <Grid item xs={12}>
          <Box sx={{
            p: 2,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.05)',
            borderRadius: 2,
            border: '1px solid rgba(245, 158, 11, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}>
            <Box sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#F59E0B',
            }} />
            <Typography sx={{ color: '#F59E0B' }}>
              Scheduled maintenance: Saturday 2 AM - 3 AM | New AI agent improvements rolling out next week
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
