import React from 'react';
import {
  Box,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  QueryStats as QueryStatsIcon,
  Group as GroupIcon,
  Storage as StorageIcon,
  Timer as TimerIcon,
  CloudDownload as CloudDownloadIcon,
} from '@mui/icons-material';
import { StyledCard } from '../../components/shared/StyledComponents';
import { mockAnalytics } from '../../data/mockData';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: number;
  period: string;
  color: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, period, color, icon }) => {
  return (
    <StyledCard sx={{ height: '100%' }}>
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            sx={{
              p: 1.5,
              borderRadius: 2,
              backgroundColor: `${color}22`,
              color: color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
          <Box
            sx={{
              ml: 'auto',
              p: 1,
              borderRadius: 1.5,
              backgroundColor: change >= 0 ? '#10B98122' : '#EF444422',
              color: change >= 0 ? '#10B981' : '#EF4444',
              fontSize: '0.75rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}
          >
            <TrendingUpIcon
              sx={{
                fontSize: 16,
                transform: change >= 0 ? 'none' : 'rotate(180deg)',
              }}
            />
            {Math.abs(change)}%
          </Box>
        </Box>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, color: '#E2E8F0' }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: '#94A3B8' }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1 }}>
          {period}
        </Typography>
      </Box>
    </StyledCard>
  );
};

const Analytics = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, color: '#E2E8F0' }}>
        Analytics Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Active Users"
            value="2,847"
            change={12.5}
            period="Last 30 days"
            color="#0EA5E9"
            icon={<GroupIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Total Storage"
            value="856 GB"
            change={8.2}
            period="Last 30 days"
            color="#6366F1"
            icon={<StorageIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Response Time"
            value="124ms"
            change={-3.2}
            period="Last 7 days"
            color="#F59E0B"
            icon={<TimerIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="API Requests"
            value="1.2M"
            change={15.7}
            period="Last 7 days"
            color="#10B981"
            icon={<QueryStatsIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Downloads"
            value="45.2K"
            change={5.3}
            period="Last 30 days"
            color="#8B5CF6"
            icon={<CloudDownloadIcon />}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MetricCard
            title="Growth Rate"
            value="24.8%"
            change={2.1}
            period="Last quarter"
            color="#EC4899"
            icon={<TrendingUpIcon />}
          />
        </Grid>
      </Grid>

      {/* TODO: Add charts and detailed analytics in future updates */}
    </Box>
  );
};

export default Analytics;
