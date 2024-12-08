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

const AgentCircle = styled(Box)<{ delay: number; startPosition: string; color: string; speed?: number; isHighSpeed?: boolean }>(
  ({ delay, startPosition, color, speed = 8, isHighSpeed = false }) => ({
  position: 'absolute',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: `radial-gradient(circle at 30% 30%, ${color}, transparent)`,
  filter: 'blur(20px)',
  opacity: 0.5,
  animation: `${converge} ${isHighSpeed ? speed * 0.5 : speed}s ${delay}s ease-in-out infinite`,
  '--startX': startPosition.split(',')[0],
  '--startY': startPosition.split(',')[1],
  '--midX': `calc(${startPosition.split(',')[0]} / 2)`,
  '--midY': `calc(${startPosition.split(',')[1]} / 2)`,
}));

const CentralCore = styled(Box)<{ isHighSpeed?: boolean }>(({ isHighSpeed = false }) => ({
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
    animation: `${rotate} ${isHighSpeed ? (Math.random() * 2 + 3) : (Math.random() * 5 + 8)}s linear infinite`,
  },
  animation: `${pulse} ${isHighSpeed ? (Math.random() * 1 + 1.5) : (Math.random() * 2 + 3)}s ease-in-out infinite`,
}));

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

interface NebulaBackgroundProps {
  isHighSpeed?: boolean;
}

const NebulaBackground: React.FC<NebulaBackgroundProps> = ({ isHighSpeed = false }) => {
  const getRandomSpeed = (min: number, max: number) => Math.random() * (max - min) + min;
  
  const agentPositions = [
    { 
      pos: '-20%,-20%', 
      color: '#4F46E5', 
      speed: isHighSpeed ? getRandomSpeed(2, 4) : getRandomSpeed(6, 10)
    },
    { 
      pos: '120%,-20%', 
      color: '#10B981', 
      speed: isHighSpeed ? getRandomSpeed(1.5, 3.5) : getRandomSpeed(7, 11)
    },
    { 
      pos: '-20%,120%', 
      color: '#F59E0B', 
      speed: isHighSpeed ? getRandomSpeed(2.5, 4.5) : getRandomSpeed(8, 12)
    },
    { 
      pos: '120%,120%', 
      color: '#EC4899', 
      speed: isHighSpeed ? getRandomSpeed(2, 3) : getRandomSpeed(5, 9)
    },
  ];

  return (
    <CosmicBackground>
      <Stars />
      {agentPositions.map((agent, index) => (
        <AgentCircle
          key={index}
          delay={index * (isHighSpeed ? 0.2 : 0.5)}
          startPosition={agent.pos}
          color={agent.color}
          speed={agent.speed}
          isHighSpeed={isHighSpeed}
        />
      ))}
      <CentralCore isHighSpeed={isHighSpeed} />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)' }} />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.5) rotate(45deg)' }} />
      <EnergyRing sx={{ transform: 'translate(-50%, -50%) scale(1.8) rotate(-45deg)' }} />
    </CosmicBackground>
  );
};

export default NebulaBackground;
