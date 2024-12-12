import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TrendingUp, TrendingDown } from 'lucide-react';

const GlassMetricCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '1.5rem',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-4px)',
  }
}));

const MetricValue = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 600,
  color: theme.palette.primary.main
}));

interface MetricCardProps {
  title: string;
  value: number | string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  loading?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trend,
  loading = false
}) => {
  return (
    <GlassMetricCard>
      <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
        {title}
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress size={24} />
        </Box>
      ) : (
        <>
          <MetricValue>{value}</MetricValue>
          {trend && (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              color: trend.isPositive ? 'success.main' : 'error.main'
            }}>
              {trend.isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <Typography variant="caption">
                {trend.value}%
              </Typography>
            </Box>
          )}
        </>
      )}
    </GlassMetricCard>
  );
};
