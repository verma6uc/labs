import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
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
    await loadSlim(engine);
  }, []);

  const getParticlesConfig = (variant: string) => {
    const baseConfig = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
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
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#0EA5E9",
        },
        links: {
          color: "#0EA5E9",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
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
    };

    switch (variant) {
      case 'dense':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 120,
              density: {
                enable: true,
                area: 600,
              },
            },
            move: {
              ...baseConfig.particles.move,
              speed: 3,
            },
          },
        };
      case 'sparse':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              ...baseConfig.particles.number,
              value: 40,
              density: {
                enable: true,
                area: 1000,
              },
            },
            move: {
              ...baseConfig.particles.move,
              speed: 1.5,
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
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: inView ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
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
