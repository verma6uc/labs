import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import { particlesConfig } from '../../config/particlesConfig';

const PageWrapper = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  background: 'linear-gradient(to bottom, #0F172A, #1E293B)',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const ContentWrapper = styled(Container)({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '40px 20px',
});

const ParticlesWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
});

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <PageWrapper>
      <ParticlesWrapper>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
        />
      </ParticlesWrapper>
      <ContentWrapper maxWidth="sm">
        {children}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default AuthLayout;
