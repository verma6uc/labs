import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import ParticleBackground from '../../../components/ParticleBackground';
import { loadingNebulaStyles } from '../styles/OnboardingStyles';

interface OnboardingLayoutProps {
  children: ReactNode;
  isLoading?: boolean;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({ children, isLoading }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Nebula background for loading state */}
      {isLoading && <Box sx={loadingNebulaStyles} />}
      
      {/* Particle background */}
      <ParticleBackground variant="sparse" />
      
      <Container
        maxWidth={false}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
          p: { xs: 2, sm: 3, md: 4 },
          height: '100vh',
          overflow: 'auto',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ 
          maxWidth: '1400px', 
          width: '100%', 
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          justifyContent: 'center',
        }}>
          {/* Main Content */}
          {children}
        </Box>
      </Container>
    </Box>
  );
};

export default OnboardingLayout;
