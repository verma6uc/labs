import React from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SolarSystem from '../components/SolarSystem';
import ParticleBackground from '../components/ParticleBackground';

const AgentCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(6),
  height: '100%',
  minHeight: '500px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '24px',
  border: '1px solid rgba(14, 165, 233, 0.2)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(14, 165, 233, 0.4)',
  },
}));

const GlowingBackground = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '200%',
  height: '200%',
  background: 'radial-gradient(circle at center, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 50%)',
  opacity: 0.5,
  pointerEvents: 'none',
});

const agents = [
  {
    title: 'Seldon',
    subtitle: 'Strategic Planner',
    description: 'Inspired by Hari Seldon\'s predictive genius, Seldon sets the course. Over time, he\'ll map out milestones, ensure coherence, and help you navigate each critical decision point on your product journey.',
    quote: 'A well-charted path keeps every goal within reach...',
  },
  {
    title: 'Baley',
    subtitle: 'Research & Insights',
    description: 'Echoing Elijah Baley\'s investigative prowess, Baley probes markets, competitors, and user needs. As he matures, he\'ll distill vast information into actionable insights, helping you make informed, data-driven choices.',
    quote: 'Knowledge transforms uncertainty into opportunity...',
  },
  {
    title: 'Dors',
    subtitle: 'Frontend Experience',
    description: 'Like Dors Venabili\'s gentle guidance, Dors shapes friendly, intuitive interfaces. Eventually, she\'ll craft clean layouts, fluid navigation, and a user experience that feels both natural and engaging.',
    quote: 'A well-designed interface invites exploration...',
  },
  {
    title: 'Daneel',
    subtitle: 'Backend & Data Logic',
    description: 'Channeling R. Daneel Olivaw\'s reliability, Daneel will handle data processes and queries. In time, he\'ll ensure your product\'s backend is efficient, stable, and always ready to serve up the right information.',
    quote: 'Structured data lays the foundation for clarity...',
  },
  {
    title: 'Giskard',
    subtitle: 'Integration & Cohesion',
    description: 'Reflecting R. Giskard\'s subtle interplay, Giskard will orchestrate seamless communication between systems. As he evolves, expect effortless integrations, ensuring all parts work together in perfect harmony.',
    quote: 'When every piece fits, the whole grows stronger...',
  },
  {
    title: 'Calvin',
    subtitle: 'Quality & Evolution',
    description: 'Inspired by Susan Calvin\'s deep understanding of robotic minds, Calvin will focus on testing, refining, and iterating. Over time, she\'ll assess feedback, suggest improvements, and ensure your product continuously evolves for the better.',
    quote: 'Refinement is the engine of lasting progress...',
  },
];

const Agents: React.FC = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground variant="sparse" />
      <Box sx={{
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.05) 0%, rgba(14, 165, 233, 0) 100%)',
        overflow: 'hidden',
      }}>
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 4, md: 6, lg: 8 }, pt: { xs: 12, md: 16 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                mb: 3,
                background: 'linear-gradient(45deg, #0EA5E9 30%, #6366F1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Meet Our Asimov-Inspired AI Agents
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '900px',
                mx: 'auto',
                lineHeight: 1.6,
                px: 2,
              }}
            >
              Drawing on the spirit of Asimov\'s universe, we\'ve conceptualized a team of specialized AI agents—each playing a distinct role in guiding your product from idea to reality. Today, they\'re outlines of what they\'ll become; tomorrow, they\'ll plan, research, design, build, integrate, and refine your vision into something extraordinary.
            </Typography>
          </Box>
        </Container>

        <Box sx={{ 
          position: 'relative', 
          height: { xs: '60vh', md: '80vh' },
          width: '100%',
          mb: { xs: 6, md: 8 },
          mt: { xs: 4, md: 6 },
        }}>
          <SolarSystem />
        </Box>

        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, pb: { xs: 8, md: 12 }, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Grid container spacing={4}>
            {agents.map((agent, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <AgentCard>
                  <GlowingBackground />
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography
                      variant="h3"
                      sx={{
                        textAlign: 'center',
                        mb: 1,
                        fontSize: { xs: '2rem', md: '2.25rem' },
                        fontWeight: 700,
                        background: 'linear-gradient(45deg, #0EA5E9 30%, #6366F1 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {agent.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: 'center',
                        mb: 3,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                      }}
                    >
                      {agent.subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.7)',
                        lineHeight: 1.8,
                        fontSize: '1.1rem',
                        mb: 3,
                      }}
                    >
                      {agent.description}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: 'center',
                        color: 'rgba(14, 165, 233, 0.9)',
                        fontStyle: 'italic',
                        fontSize: '1.1rem',
                      }}
                    >
                      {agent.quote}
                    </Typography>
                  </Box>
                </AgentCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Agents;
