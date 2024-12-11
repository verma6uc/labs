import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(14, 165, 233, 0.15)',
  color: '#0EA5E9',
  textTransform: 'none',
  borderRadius: '8px',
  padding: '8px 16px',
  fontWeight: 500,
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: 'rgba(14, 165, 233, 0.25)',
  },
  '&.secondary': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    color: '#E2E8F0',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  '&.icon-button': {
    minWidth: 40,
    width: 40,
    height: 40,
    padding: 0,
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

export interface AdminButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
  buttonType?: 'primary' | 'secondary';
  isIconButton?: boolean;
}

export const AdminButton: React.FC<AdminButtonProps> = ({ 
  children, 
  buttonType = 'primary',
  isIconButton = false,
  className = '',
  ...props 
}) => {
  const buttonClass = [
    className,
    buttonType === 'secondary' ? 'secondary' : '',
    isIconButton ? 'icon-button' : '',
  ].filter(Boolean).join(' ');

  return (
    <StyledButton 
      className={buttonClass} 
      variant="contained"
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default AdminButton;
