import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
} from '@mui/icons-material';

interface MetricChartProps {
  title: string;
  value: string | number;
  change?: number;
  description: string;
  data?: number[];
}

const MetricChart: React.FC<MetricChartProps> = ({
  title,
  value,
  change,
  description,
  data = [],
}) => {
  const theme = useTheme();

  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderRadius: 2,
        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        height: '100%',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
          fontWeight: 500,
          mb: 2,
        }}
      >
        {title}
      </Typography>

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
        {change !== undefined && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              color: change >= 0 ? '#10B981' : '#EF4444',
              fontSize: '0.875rem',
            }}
          >
            {change >= 0 ? <TrendingUpIcon fontSize="small" /> : <TrendingDownIcon fontSize="small" />}
            {Math.abs(change)}%
          </Box>
        )}
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: '#64748B',
          mb: 2,
        }}
      >
        {description}
      </Typography>

      {data.length > 0 && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 0.5,
            height: 50,
            mt: 2,
          }}
        >
          {data.map((value, index) => {
            const height = range === 0 ? 100 : ((value - minValue) / range) * 100;
            return (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  height: `${height}%`,
                  backgroundColor: theme.palette.primary.main,
                  opacity: 0.7,
                  borderRadius: '2px 2px 0 0',
                  transition: 'height 0.3s ease-in-out',
                  '&:hover': {
                    opacity: 1,
                  },
                }}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default MetricChart;
