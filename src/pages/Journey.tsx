import React from 'react';
import { Box } from '@mui/material';
import ParticleBackground from '../components/ParticleBackground';

const Journey = () => {
  return (
    <Box sx={{ 
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      backdropFilter: 'blur(20px)',
      overflow: 'hidden',
    }}>
      <ParticleBackground variant="sparse" />
      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        maxWidth: '1600px',
        margin: '0 auto',
        padding: { xs: '16px', sm: '20px' },
      }}>
        {/* Journey page content */}
      </Box>
    </Box>
  );
};

export default Journey;
