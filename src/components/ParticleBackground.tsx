import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import type { ISourceOptions } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  variant?: 'default' | 'sparse' | 'dense';
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ variant = 'default' }) => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const getConfig = (variant: string): ISourceOptions => {
    const baseConfig: ISourceOptions = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
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
        move: {
          enable: true,
          outModes: "bounce",
          random: true,
          speed: 0.5,
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
          value: 0.2,
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
      case 'sparse':
        return {
          ...baseConfig,
          particles: {
            ...baseConfig.particles,
            number: {
              density: {
                enable: true,
                area: 1200,
              },
              value: 40,
            },
            opacity: {
              value: 0.3,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 0.3,
            },
          },
        };
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
            opacity: {
              value: 0.4,
            },
            move: {
              ...baseConfig.particles.move,
              speed: 0.8,
            },
          },
        };
      default:
        return baseConfig;
    }
  };

  return (
    <Particles
      id={`tsparticles-${variant}`}
      init={particlesInit}
      options={getConfig(variant)}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    />
  );
};

export default ParticleBackground;
