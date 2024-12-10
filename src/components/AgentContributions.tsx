import React from 'react';
import { Box, Tooltip, Avatar, styled, keyframes } from '@mui/material';
import {
  SeldonIcon,
  BaleyIcon,
  DorsIcon,
  DaneelIcon,
  GiskardIcon,
  CalvinIcon
} from './icons/AgentIcons';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AgentAvatar = styled(Avatar)(({ active }: { active: boolean }) => ({
  width: 32,
  height: 32,
  backgroundColor: active ? 'rgba(14, 165, 233, 0.1)' : 'rgba(255, 255, 255, 0.05)',
  border: `2px solid ${active ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  animation: active ? `${pulse} 2s infinite` : 'none',
  '& svg': {
    width: 20,
    height: 20,
    color: active ? '#0EA5E9' : 'rgba(255, 255, 255, 0.3)',
  },
  '&:hover': {
    backgroundColor: active ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255, 255, 255, 0.08)',
    transform: 'translateY(-2px)',
  },
}));

const AgentGroup = styled(Box)({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  padding: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
});

interface Agent {
  name: string;
  icon: React.ReactNode;
  role: string;
}

const agents: Agent[] = [
  { name: 'Seldon', icon: <SeldonIcon />, role: 'Strategic Planning' },
  { name: 'Baley', icon: <BaleyIcon />, role: 'Research & Analysis' },
  { name: 'Dors', icon: <DorsIcon />, role: 'Engineering & Design' },
  { name: 'Daneel', icon: <DaneelIcon />, role: 'Data & Logic' },
  { name: 'Giskard', icon: <GiskardIcon />, role: 'Integration' },
  { name: 'Calvin', icon: <CalvinIcon />, role: 'Quality Assurance' },
];

interface AgentContributionsProps {
  activeAgents: string[];
}

const AgentContributions: React.FC<AgentContributionsProps> = ({ activeAgents }) => {
  return (
    <AgentGroup>
      {agents.map((agent) => (
        <Tooltip
          key={agent.name}
          title={`${agent.name} - ${agent.role}${activeAgents.includes(agent.name) ? ' (Active)' : ''}`}
          arrow
          placement="top"
        >
          <AgentAvatar active={activeAgents.includes(agent.name)}>
            {agent.icon}
          </AgentAvatar>
        </Tooltip>
      ))}
    </AgentGroup>
  );
};

export default AgentContributions;
