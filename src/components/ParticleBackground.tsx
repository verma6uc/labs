import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';
import Particles from "react-tsparticles";

interface ParticleBackgroundProps {
  variant?: 'default' | 'dense' | 'sparse';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ variant = 'default' }) => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const getParticlesConfig = (variant: string) => {
    const baseConfig = {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#0EA5E9",
        },
        links: {
          color: "#0EA5E9",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
    };

    switch (variant) {
      case 'dense':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              density: {
                enable: true,
                area: 600,
              },
              value: 100,
            },
          },
        };
      case 'sparse':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 60,
            },
            opacity: {
              value: 0.2,
            },
          },
        };
      default:
        return baseConfig;
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: inView ? 1 : 0,
        transition: 'opacity 1s ease-in-out',
      }}
    >
      {inView && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={getParticlesConfig(variant)}
        />
      )}
    </Box>
  );
};

export default ParticleBackground;
