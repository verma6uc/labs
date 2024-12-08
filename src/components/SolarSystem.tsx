import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg); }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const SolarSystemContainer = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'visible',
});

const Sun = styled(Box)({
  width: '150px',
  height: '150px',
  background: 'radial-gradient(circle at center, #0EA5E9 0%, #6366F1 100%)',
  borderRadius: '50%',
  position: 'absolute',
  animation: `${pulse} 3s ease-in-out infinite`,
  boxShadow: '0 0 60px rgba(14, 165, 233, 0.6)',
  zIndex: 2,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-30px',
    left: '-30px',
    right: '-30px',
    bottom: '-30px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
  }
});

const OrbitPath = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    borderRadius: '50%',
    border: '1px solid rgba(14, 165, 233, 0.1)',
  }
});

const Planet = styled(Box)({
  width: '60px',
  height: '60px',
  background: 'radial-gradient(circle at 30% 30%, #0EA5E9 0%, #6366F1 100%)',
  borderRadius: '50%',
  position: 'absolute',
  animation: `${orbit} var(--orbit-duration) linear infinite`,
  boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    borderRadius: '50%',
    background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.3) 0%, transparent 70%)',
  }
});

const PlanetLabel = styled(Box)({
  position: 'absolute',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'center',
  transform: 'translateY(-30px)',
  opacity: 0.9,
  textShadow: '0 0 10px rgba(0,0,0,0.5)',
  whiteSpace: 'nowrap',
});

const planets = [
  { name: 'Seldon', radius: 200, duration: '20s', delay: '0s' },
  { name: 'Baley', radius: 280, duration: '25s', delay: '-5s' },
  { name: 'Dors', radius: 360, duration: '30s', delay: '-10s' },
  { name: 'Daneel', radius: 440, duration: '35s', delay: '-15s' },
  { name: 'Giskard', radius: 520, duration: '40s', delay: '-20s' },
  { name: 'Calvin', radius: 600, duration: '45s', delay: '-25s' },
];

const SolarSystem = () => {
  return (
    <SolarSystemContainer>
      <Sun>
        <PlanetLabel sx={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          fontSize: '1.2rem',
          color: 'white',
          textShadow: '0 0 10px rgba(0,0,0,0.5)',
        }}>
          Creator Labs
        </PlanetLabel>
      </Sun>
      {planets.map((planet, index) => (
        <React.Fragment key={planet.name}>
          <OrbitPath
            sx={{
              width: planet.radius * 2,
              height: planet.radius * 2,
              transform: 'translate(-50%, -50%)',
            }}
          />
          <Planet
            sx={{
              '--orbit-radius': `${planet.radius}px`,
              '--orbit-duration': planet.duration,
              animationDelay: planet.delay,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <PlanetLabel>{planet.name}</PlanetLabel>
          </Planet>
        </React.Fragment>
      ))}
    </SolarSystemContainer>
  );
};

export default SolarSystem;
