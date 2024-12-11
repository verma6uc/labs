import React from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';

interface AdminCardProps extends BoxProps {
  children: React.ReactNode;
  noPadding?: boolean;
}

const AdminCard: React.FC<AdminCardProps> = ({ children, noPadding = false, sx, ...props }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        borderRadius: 2,
        border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        p: noPadding ? 0 : 3,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default AdminCard;
