import React from 'react';
import { Box, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

interface StepNavigationProps {
  onNext: (e?: React.FormEvent) => void;
  onBack: () => void;
  nextLabel?: string;
  backLabel?: string;
  showBack?: boolean;
  isNextDisabled?: boolean;
  isLoading?: boolean;
}

const StepNavigation: React.FC<StepNavigationProps> = ({
  onNext,
  onBack,
  nextLabel = 'Next',
  backLabel = 'Back',
  showBack = true,
  isNextDisabled = false,
  isLoading = false,
}) => {
  console.log('StepNavigation rendered:', { isNextDisabled, isLoading });

  const handleNextClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Next button clicked');
    onNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        gap: 2,
        backgroundColor: 'rgba(17, 25, 40, 0.8)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        p: 2,
      }}
    >
      {showBack ? (
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={onBack}
          variant="outlined"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.23)',
            px: 3,
            py: 1.5,
            minWidth: '140px',
            height: '48px',
            fontSize: '1rem',
            '&:hover': {
              borderColor: '#fff',
              color: '#fff',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          {backLabel}
        </Button>
      ) : (
        <Box /> // Empty box for spacing when back button is hidden
      )}

      <Button
        variant="contained"
        onClick={handleNextClick}
        disabled={isNextDisabled || isLoading}
        endIcon={<ArrowForwardIcon />}
        sx={{
          backgroundColor: '#0EA5E9',
          color: '#fff',
          px: 4,
          py: 1.5,
          minWidth: '140px',
          height: '48px',
          fontSize: '1rem',
          fontWeight: 600,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            backgroundColor: '#0284C7',
            transform: 'translateY(-2px)',
            boxShadow: '0 5px 15px rgba(14, 165, 233, 0.3)',
            '&::before': {
              opacity: 1,
            },
          },
          '&.Mui-disabled': {
            backgroundColor: 'rgba(14, 165, 233, 0.3)',
            color: 'rgba(255, 255, 255, 0.3)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        {isLoading ? 'Loading...' : nextLabel}
      </Button>
    </Box>
  );
};

export default StepNavigation;
