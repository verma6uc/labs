import React from 'react';
import { Box, Typography, Grid, Card } from '@mui/material';
import {
  SmartToy as AIIcon,
  Psychology as StrategyIcon,
  Search as ResearchIcon,
  Brush as UIIcon,
  Storage as BackendIcon,
  Extension as IntegrationIcon,
  CheckCircle as QualityIcon,
} from '@mui/icons-material';

const agents = [
  {
    name: 'Strategy Agent',
    description: 'Analyzes market trends and suggests strategic improvements',
    icon: <StrategyIcon />,
    color: '#0EA5E9',
    lastInsight: 'Consider adding a feature comparison table to highlight unique value propositions',
  },
  {
    name: 'Research Agent',
    description: 'Gathers and analyzes competitor and market data',
    icon: <ResearchIcon />,
    color: '#10B981',
    lastInsight: 'Recent market analysis shows increasing demand for mobile-first features',
  },
  {
    name: 'UI Agent',
    description: 'Suggests UI/UX improvements and optimizations',
    icon: <UIIcon />,
    color: '#8B5CF6',
    lastInsight: 'Recommend simplifying the navigation structure for better user flow',
  },
  {
    name: 'Backend Agent',
    description: 'Provides insights on system architecture and performance',
    icon: <BackendIcon />,
    color: '#F59E0B',
    lastInsight: 'Consider implementing caching to improve response times',
  },
  {
    name: 'Integration Agent',
    description: 'Suggests and manages service integrations',
    icon: <IntegrationIcon />,
    color: '#EC4899',
    lastInsight: 'New analytics integration available for better user tracking',
  },
  {
    name: 'Quality Agent',
    description: 'Monitors and suggests quality improvements',
    icon: <QualityIcon />,
    color: '#6366F1',
    lastInsight: 'Recent testing revealed potential edge cases in form validation',
  },
];

const AIInsights: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: '#E2E8F0', mb: 3 }}>
        AI Agents & Insights
      </Typography>

      <Typography sx={{ color: '#94A3B8', mb: 4 }}>
        Your team of AI agents continuously analyzes your product and provides insights for improvement.
      </Typography>

      <Grid container spacing={3}>
        {agents.map((agent) => (
          <Grid item xs={12} md={6} key={agent.name}>
            <Card sx={{
              p: 3,
              backgroundColor: 'rgba(17, 25, 40, 0.6)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              height: '100%',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  backgroundColor: `${agent.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: agent.color,
                  mr: 2,
                }}>
                  {agent.icon}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ color: '#E2E8F0', fontWeight: 600 }}>
                    {agent.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#94A3B8' }}>
                    {agent.description}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{
                p: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 1,
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                <Typography variant="subtitle2" sx={{ color: '#64748B', mb: 1 }}>
                  Latest Insight
                </Typography>
                <Typography sx={{ color: '#E2E8F0' }}>
                  {agent.lastInsight}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AIInsights;
