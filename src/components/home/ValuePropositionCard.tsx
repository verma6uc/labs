import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ValuePropositionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.6)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(15, 23, 42, 0.8)'
      : 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.2)'
      : '0 8px 32px rgba(14, 165, 233, 0.1)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    width: '32px',
    height: '32px',
    color: '#0EA5E9',
  },
}));

const ValuePropositionCard: React.FC<ValuePropositionCardProps> = ({
  icon,
  title,
  description,
}) => {
  const theme = useTheme();

  return (
    <CardWrapper>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
        }}
      >
        {description}
      </Typography>
    </CardWrapper>
  );
};

export default ValuePropositionCard;
