import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import StrategyIcon from '@mui/icons-material/Lightbulb';
import ResearchIcon from '@mui/icons-material/Search';
import UiIcon from '@mui/icons-material/Brush';
import BackendIcon from '@mui/icons-material/Code';
import IntegrationsIcon from '@mui/icons-material/Extension';
import QualityIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const AgentIcon = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    width: '32px',
    height: '32px',
    color: '#0EA5E9',
  },
}));

const agents = [
  { name: 'Seldon', role: 'Strategy', icon: <StrategyIcon /> },
  { name: 'Baley', role: 'Research', icon: <ResearchIcon /> },
  { name: 'Dors', role: 'UI', icon: <UiIcon /> },
  { name: 'Daneel', role: 'Backend Logic', icon: <BackendIcon /> },
  { name: 'Giskard', role: 'Integrations', icon: <IntegrationsIcon /> },
  { name: 'Calvin', role: 'Quality', icon: <QualityIcon /> },
];

const AgentsIntroduction: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(90deg, #E2E8F0 0%, #94A3B8 100%)'
                : 'linear-gradient(90deg, #1E293B 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Meet Your AI Allies
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
            }}
          >
            Each agent specializes in a critical aspect of product creation, working behind the scenes
            to ensure your blueprint aligns with strategic insights, smooth UX, stable data logic,
            effortless integrations, and continuous quality improvements.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {agents.map((agent, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <AgentIcon>
                  {agent.icon}
                </AgentIcon>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                  }}
                >
                  {agent.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                  }}
                >
                  {agent.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            component={Link}
            to="/agents"
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(45deg, #0EA5E9 30%, #3B82F6 90%)',
              color: 'white',
              px: 4,
              py: 1.5,
              borderRadius: '12px',
              textTransform: 'none',
              fontSize: '1.1rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #0284C7 30%, #2563EB 90%)',
              },
            }}
          >
            Learn More About Our Agents
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default AgentsIntroduction;
