import React from 'react';
import { Box, Typography } from '@mui/material';

const Feedback: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Feedback
      </Typography>
      <Typography variant="body1">
        View and manage feedback here. This page is under construction.
      </Typography>
    </Box>
  );
};

export default Feedback; 