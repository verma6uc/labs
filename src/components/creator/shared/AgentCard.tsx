import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { Brain, Code, Layout, Database, Link, LineChart } from 'lucide-react';
import { styled } from '@mui/material/styles';

const GlassCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '1.5rem',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-4px)',
  }
}));

const AgentAvatar = styled(Avatar)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  border: '1px solid rgba(99, 102, 241, 0.2)',
  marginBottom: '1rem'
}));

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
  type: 'seldon' | 'baley' | 'dors' | 'daneel' | 'giskard' | 'calvin';
}

const getAgentIcon = (type: string) => {
  switch (type) {
    case 'seldon': return <Brain size={24} />;
    case 'baley': return <LineChart size={24} />;
    case 'dors': return <Layout size={24} />;
    case 'daneel': return <Database size={24} />;
    case 'giskard': return <Link size={24} />;
    case 'calvin': return <Code size={24} />;
    default: return <Brain size={24} />;
  }
};

export const AgentCard: React.FC<AgentCardProps> = ({ name, role, description, type }) => {
  return (
    <GlassCard>
      <AgentAvatar>
        {getAgentIcon(type)}
      </AgentAvatar>
      <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary' }}>
        {role}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
    </GlassCard>
  );
};
