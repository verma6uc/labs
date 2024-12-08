import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          color: {
            value: "#0EA5E9",
          },
          links: {
            color: "#0EA5E9",
            distance: 150,
            enable: true,
            opacity: 0.15,
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
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: 0.2,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5
            }
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#0EA5E9",
              frequency: 0.05,
              opacity: 1
            }
          }
        },
        detectRetina: true,
        background: {
          color: "#0F172A",
          image: "radial-gradient(circle at 50% 50%, #1E293B 0%, #0F172A 100%)",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
    />
  );
};

export default ParticlesBackground;
