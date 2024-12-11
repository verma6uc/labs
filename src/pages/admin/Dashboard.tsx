import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import WelcomeBanner from '../../components/dashboard/WelcomeBanner';
import MetricCard from '../../components/dashboard/MetricCard';
import MetricChart from '../../components/dashboard/MetricChart';
import ActivityFeed from '../../components/dashboard/ActivityFeed';
import { mockActivities } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const theme = useTheme();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Mock data for metrics
  const systemMetrics = [
    {
      title: 'System Uptime & Availability',
      value: '99.98%',
      subtitle: 'Last 24 hours',
      status: 'healthy' as const,
      trend: {
        value: 0.02,
        label: 'vs last week',
      },
      progress: 99.98,
      tooltip: 'Percentage of time the platform has been fully operational',
      chartData: [99.95, 99.97, 99.99, 99.98, 99.96, 99.98, 99.99],
    },
    {
      title: 'Active Sessions & Load',
      value: '1,284',
      subtitle: 'Current active users',
      status: 'warning' as const,
      trend: {
        value: 12.5,
        label: 'vs average',
      },
      tooltip: 'Number of current user sessions and load comparison',
      chartData: [980, 1150, 1050, 1280, 1100, 1284, 1200],
    },
    {
      title: 'Average Response Time',
      value: '142ms',
      subtitle: 'Last hour average',
      status: 'healthy' as const,
      trend: {
        value: -5.3,
        label: 'vs previous hour',
      },
      tooltip: 'Mean latency for backend service requests',
      chartData: [155, 148, 145, 142, 140, 142, 141],
    },
    {
      title: 'Error & Alert Rate',
      value: '23',
      subtitle: 'Events per hour',
      status: 'error' as const,
      trend: {
        value: 15.8,
        label: 'vs baseline',
      },
      tooltip: 'Number of system errors and critical alerts',
      chartData: [15, 18, 20, 19, 23, 21, 23],
    },
  ];

  const performanceMetrics = [
    {
      title: 'Compliance & Security Index',
      value: '94',
      subtitle: 'Security score',
      status: 'healthy' as const,
      progress: 94,
      tooltip: 'Overall security and compliance health score',
      description: 'Based on security policies, 2FA adoption, and compliance checks',
      chartData: [90, 91, 93, 92, 94, 93, 94],
    },
    {
      title: 'Feature & Integration Health',
      value: '28/30',
      subtitle: 'Services operational',
      status: 'warning' as const,
      progress: 93.33,
      tooltip: 'Status of core features and integrated services',
      description: 'Monitoring service stability and integration performance',
      chartData: [30, 29, 28, 30, 29, 28, 28],
    },
    {
      title: 'User Growth & Engagement',
      value: '+18.5%',
      subtitle: 'Monthly growth rate',
      status: 'healthy' as const,
      trend: {
        value: 18.5,
        label: 'vs last month',
      },
      tooltip: 'Platform adoption and user engagement metrics',
      description: 'Tracking user acquisition and activity trends',
      chartData: [12.5, 14.2, 15.8, 16.9, 17.5, 18.2, 18.5],
    },
    {
      title: 'Automated Task Completion',
      value: '87.3%',
      subtitle: 'Success rate',
      status: 'healthy' as const,
      progress: 87.3,
      tooltip: 'AI agent task automation efficiency',
      description: 'Percentage of tasks completed without human intervention',
      chartData: [82.5, 83.8, 85.2, 86.1, 86.8, 87.0, 87.3],
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

        {/* System Health Metrics */}
        {systemMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricCard {...metric} />
          </Grid>
        ))}

        {/* Performance Metrics with Charts */}
        {performanceMetrics.map((metric, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <MetricChart
              title={metric.title}
              value={metric.value}
              change={metric.trend?.value}
              description={metric.description}
              data={metric.chartData}
            />
          </Grid>
        ))}

        {/* Activity Feed */}
        <Grid item xs={12}>
          <Box sx={{ height: '400px' }}>
            <ActivityFeed activities={mockActivities} />
          </Box>
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
