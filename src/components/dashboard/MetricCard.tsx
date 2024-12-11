import React from 'react';
import { Box, Typography, useTheme, LinearProgress, Tooltip } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  status?: 'healthy' | 'warning' | 'error';
  trend?: {
    value: number;
    label: string;
  };
  progress?: number;
  tooltip?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  status = 'healthy',
  trend,
  progress,
  tooltip,
}) => {
  const theme = useTheme();

  const getStatusColor = () => {
    switch (status) {
      case 'healthy':
        return '#10B981';
      case 'warning':
        return '#F59E0B';
      case 'error':
        return '#EF4444';
      default:
        return '#10B981';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'healthy':
        return <CheckCircleIcon sx={{ color: '#10B981' }} />;
      case 'warning':
        return <WarningIcon sx={{ color: '#F59E0B' }} />;
      case 'error':
        return <ErrorIcon sx={{ color: '#EF4444' }} />;
      default:
        return <CheckCircleIcon sx={{ color: '#10B981' }} />;
    }
  };

  return (
    <Tooltip title={tooltip || ''} arrow>
      <Box
        sx={{
          p: 3,
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderRadius: 2,
          border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
          {getStatusIcon()}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 1 }}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
              fontWeight: 600,
            }}
          >
            {value}
          </Typography>
          {trend && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: trend.value >= 0 ? '#10B981' : '#EF4444',
                fontSize: '0.875rem',
              }}
            >
              {trend.value >= 0 ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
              {Math.abs(trend.value)}%
            </Box>
          )}
        </Box>

        {subtitle && (
          <Typography
            variant="body2"
            sx={{
              color: '#64748B',
              mb: progress !== undefined ? 2 : 0,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {progress !== undefined && (
          <Box sx={{ mt: 2 }}>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 6,
                borderRadius: 3,
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: getStatusColor(),
                  borderRadius: 3,
                },
              }}
            />
          </Box>
        )}
      </Box>
    </Tooltip>
  );
};

export default MetricCard;
