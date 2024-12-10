import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface TimelineStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const StepWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  position: 'relative',
  paddingBottom: theme.spacing(4),
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  position: 'relative',
  zIndex: 1,
  '& svg': {
    width: '24px',
    height: '24px',
    color: '#0EA5E9',
  },
}));

const ContentWrapper = styled(Box)({
  flex: 1,
});

const TimelineStep: React.FC<TimelineStepProps> = ({
  icon,
  title,
  description,
  isLast = false,
}) => {
  const theme = useTheme();

  return (
    <StepWrapper>
      <Box sx={{ position: 'relative' }}>
        <IconWrapper>
          {icon}
        </IconWrapper>
        {!isLast && (
          <Box
            sx={{
              position: 'absolute',
              left: '24px',
              top: '48px',
              bottom: '-16px',
              width: '2px',
              backgroundColor: theme.palette.mode === 'dark'
                ? 'rgba(14, 165, 233, 0.1)'
                : 'rgba(14, 165, 233, 0.08)',
              transform: 'translateX(-50%)',
            }}
          />
        )}
      </Box>
      <ContentWrapper>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
          }}
        >
          {description}
        </Typography>
      </ContentWrapper>
    </StepWrapper>
  );
};

export default TimelineStep;
