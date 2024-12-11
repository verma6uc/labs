import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';
import { glassButton } from '../../layouts/AdminLayoutStyles';

const StyledGlassButton = styled(Button)(({ theme }) => ({
  ...glassButton,
  padding: '8px 16px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.875rem',
  '&.MuiButton-contained': {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    color: '#0EA5E9',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: 'rgba(14, 165, 233, 0.5)',
    color: '#0EA5E9',
    '&:hover': {
      borderColor: '#0EA5E9',
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
    },
  },
  '& .MuiButton-startIcon, & .MuiButton-endIcon': {
    '& svg': {
      fontSize: 20,
    },
  },
  '&.MuiButton-sizeSmall': {
    padding: '6px 12px',
    fontSize: '0.8125rem',
    '& .MuiButton-startIcon, & .MuiButton-endIcon': {
      '& svg': {
        fontSize: 18,
      },
    },
  },
  '&.MuiButton-sizeLarge': {
    padding: '10px 20px',
    fontSize: '0.9375rem',
    '& .MuiButton-startIcon, & .MuiButton-endIcon': {
      '& svg': {
        fontSize: 22,
      },
    },
  },
  '&.Mui-disabled': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: 'rgba(255, 255, 255, 0.3)',
  },
}));

export interface GlassButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const GlassButton: React.FC<GlassButtonProps> = ({ children, ...props }) => {
  return (
    <StyledGlassButton {...props}>
      {children}
    </StyledGlassButton>
  );
};

export default GlassButton;
