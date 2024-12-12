import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Check, Circle } from 'lucide-react';

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '1rem 0',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '1rem',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'rgba(255, 255, 255, 0.1)',
  }
}));

const StepContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginLeft: '2rem',
  padding: '1rem',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
  }
}));

const StepIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '-2.5rem',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1
}));

interface TimelineStepProps {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  title,
  description,
  status,
  date
}) => {
  return (
    <TimelineContainer>
      <StepContainer>
        <StepIcon>
          {status === 'completed' ? (
            <Check size={16} color="#4CAF50" />
          ) : status === 'current' ? (
            <Circle size={16} fill="#2196F3" color="#2196F3" />
          ) : (
            <Circle size={16} />
          )}
        </StepIcon>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" sx={{
            color: status === 'completed' ? 'success.main' :
                   status === 'current' ? 'primary.main' :
                   'text.secondary'
          }}>
            {title}
          </Typography>
          {date && (
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              {date}
            </Typography>
          )}
        </Box>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </StepContainer>
    </TimelineContainer>
  );
};
