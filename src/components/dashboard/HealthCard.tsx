import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
} from '@mui/icons-material';

interface HealthCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  status: 'healthy' | 'warning' | 'error';
  trend?: {
    value: number;
    label: string;
  };
}

const HealthCard: React.FC<HealthCardProps> = ({
  title,
  value,
  subtitle,
  status,
  trend,
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
        return '#3B82F6';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'healthy':
        return <CheckCircleIcon sx={{ color: '#10B981', fontSize: 20 }} />;
      case 'warning':
        return <WarningIcon sx={{ color: '#F59E0B', fontSize: 20 }} />;
      case 'error':
        return <ErrorIcon sx={{ color: '#EF4444', fontSize: 20 }} />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{
      p: 2.5,
      backgroundColor: 'rgba(17, 25, 40, 0.2)',
      borderRadius: 2,
      border: '1px solid rgba(255, 255, 255, 0.05)',
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        background: `radial-gradient(circle at top right, ${getStatusColor()}22, transparent 70%)`,
        opacity: 0.5,
      },
    }}>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography sx={{ 
            color: 'rgba(148, 163, 184, 0.8)',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}>
            {title}
          </Typography>
          <Box sx={{
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {getStatusIcon()}
          </Box>
        </Box>
        <Typography sx={{ 
          color: '#E2E8F0',
          fontSize: '2rem',
          fontWeight: 600,
          mb: 0.5,
          lineHeight: 1,
        }}>
          {value}
        </Typography>
        {subtitle && (
          <Typography sx={{ 
            color: 'rgba(148, 163, 184, 0.8)',
            fontSize: '0.875rem',
            mb: trend ? 2 : 0,
          }}>
            {subtitle}
          </Typography>
        )}
        {trend && (
          <Box sx={{ 
            mt: 'auto',
            pt: 2,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <Typography sx={{ 
              color: trend.value >= 0 ? '#10B981' : '#EF4444',
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
            }}>
              {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HealthCard;
