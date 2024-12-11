import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemButtonProps, styled } from '@mui/material';

interface StyledListItemButtonProps extends Omit<ListItemButtonProps, 'component'> {
  to?: string;
}

const StyledButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px 16px',
  marginBottom: '4px',
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  '&.Mui-selected': {
    backgroundColor: 'rgba(14, 165, 233, 0.15)',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.25)',
    },
    '& .MuiListItemIcon-root': {
      color: '#0EA5E9',
    },
    '& .MuiTypography-root': {
      color: '#E2E8F0',
      fontWeight: 600,
    },
  },
  '&:not(.Mui-selected)': {
    '& .MuiListItemIcon-root': {
      color: '#94A3B8',
    },
    '& .MuiTypography-root': {
      color: '#E2E8F0',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '& .MuiListItemIcon-root': {
        color: '#0EA5E9',
      },
    },
  },
}));

export const StyledListItemButton = React.forwardRef<HTMLDivElement, StyledListItemButtonProps>(
  ({ to, children, ...props }, ref) => {
    if (to) {
      return (
        <Link to={to} style={{ textDecoration: 'none', width: '100%' }}>
          <StyledButton ref={ref} {...props}>
            {children}
          </StyledButton>
        </Link>
      );
    }

    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

StyledListItemButton.displayName = 'StyledListItemButton';

export default StyledListItemButton;
