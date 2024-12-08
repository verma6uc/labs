import React from 'react';
import { Box } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

const converge = keyframes`
  0% {
    transform: translate(var(--startX), var(--startY)) scale(0.8);
    opacity: 0.3;
  }
  50% {
    transform: translate(var(--midX), var(--midY)) scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: translate(50%, 50%) scale(1);
    opacity: 0.5;
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const CosmicBackground = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  background: 'linear-gradient(to bottom, #0a0014 0%, #1a0033 100%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, transparent 0%, #000 100%)',
    opacity: 0.7,
  }
}));

const Stars = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0))',
  backgroundRepeat: 'repeat',
  backgroundSize: '200px 200px',
  animation: `${shimmer} 60s linear infinite`,
  opacity: 0.2,
});

const AgentCircle = styled(Box)<{ delay: number; startPosition: string; color: string }>(({ delay, startPosition, color }) => ({
  position: 'absolute',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
  filter: 'blur(20px)',
  opacity: 0.5,
  animation: `${converge} 8s ${delay}s ease-in-out infinite`,
  '--startX': startPosition.split(',')[0],
  '--startY': startPosition.split(',')[1],
  '--midX': `calc(${startPosition.split(',')[0]} / 2)`,
  '--midY': `calc(${startPosition.split(',')[1]} / 2)`,
}));

const CentralCore = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '200px',
  height: '200px',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: '-20px',
    right: '-20px',
    bottom: '-20px',
    border: '2px solid rgba(255,255,255,0.1)',
    borderRadius: '50%',
    animation: `${rotate} 10s linear infinite`,
  },
  animation: `${pulse} 4s ease-in-out infinite`,
});

const EnergyRing = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
  height: '300px',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '50%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-1px',
    left: '-1px',
    right: '-1px',
    bottom: '-1px',
    border: '1px solid transparent',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), transparent)',
    backgroundClip: 'padding-box',
  }
});

// Agent colors representing different capabilities
const agentConfigs = [
  { color: '#4facfe', startPosition: '-100%,-100%', delay: 0 },   // Logic
  { color: '#00f2fe', startPosition: '200%,-100%', delay: 0.5 },  // Analysis
  { color: '#38ef7d', startPosition: '-100%,200%', delay: 1 },    // Creation
  { color: '#11998e', startPosition: '200%,200%', delay: 1.5 },   // Learning
  { color: '#e100ff', startPosition: '-50%,-150%', delay: 2 },    // Vision
  { color: '#8e2de2', startPosition: '150%,-50%', delay: 2.5 },   // Language
  { color: '#ff9a9e', startPosition: '-150%,150%', delay: 3 },    // Reasoning
  { color: '#ff867a', startPosition: '150%,150%', delay: 3.5 },   // Planning
];

const NebulaBackground: React.FC = () => {
  return (
    <CosmicBackground>
      <Stars />
      {agentConfigs.map((config, index) => (
        <AgentCircle
          key={index}
          delay={config.delay}
          startPosition={config.startPosition}
          color={config.color}
        />
      ))}
      <CentralCore />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)' }} />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.5) rotate(45deg)' }} />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.8) rotate(-45deg)' }} />
    </CosmicBackground>
  );
};

export default NebulaBackground;
