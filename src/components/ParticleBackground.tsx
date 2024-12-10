import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";

interface ParticleBackgroundProps {
  variant?: 'default' | 'dense' | 'sparse' | 'light';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ variant = 'default' }) => {
  const theme = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    background: {
      color: 'transparent',
    },
    particles: {
      number: {
        value: variant === 'dense' ? 100 : variant === 'sparse' ? 50 : 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: theme.palette.mode === 'dark' ? '#0EA5E9' : '#0284C7',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: theme.palette.mode === 'dark' ? 0.3 : 0.15,
      },
      size: {
        value: { min: 1, max: 3 },
      },
      links: {
        enable: true,
        distance: 150,
        color: theme.palette.mode === 'dark' ? '#0EA5E9' : '#0284C7',
        opacity: theme.palette.mode === 'dark' ? 0.2 : 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
    fullScreen: false,
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
        width: '100%',
        '& canvas': {
          position: 'absolute !important',
          zIndex: 'inherit',
        },
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          ...particlesConfig,
          style: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 'inherit',
          },
        }}
      />
    </Box>
  );
};

export default ParticleBackground;
