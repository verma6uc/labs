import React from 'react';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemButtonProps, styled } from '@mui/material';

interface StyledListItemButtonProps extends Omit<ListItemButtonProps, 'component'> {
  to?: string;
}

const StyledButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '12px',
  padding: '12px 16px',
  marginBottom: '4px',
  '&.Mui-selected': {
    backgroundColor: 'rgba(14, 165, 233, 0.08)',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.12)',
    },
    '& .MuiListItemIcon-root': {
      color: '#0EA5E9',
    },
    '& .MuiTypography-root': {
      color: '#E2E8F0',
      fontWeight: 600,
    },
  },
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

export const StyledListItemButton = React.forwardRef<HTMLDivElement, StyledListItemButtonProps>(
  ({ to, children, ...props }, ref) => {
    if (to) {
      return (
        <Link to={to} style={{ textDecoration: 'none' }}>
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
