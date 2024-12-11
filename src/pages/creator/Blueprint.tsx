import React from 'react';
import { Box, Typography } from '@mui/material';

const Blueprint: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 3 }}>
        Blueprint
      </Typography>
      <Typography sx={{ color: '#94A3B8' }}>
        Design your product structure and flow
      </Typography>
    </Box>
  );
};

export default Blueprint;
