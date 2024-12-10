import React from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import SolarSystem from '../components/SolarSystem';
import ParticleBackground from '../components/ParticleBackground';
import {
  SeldonIcon,
  BaleyIcon,
  DorsIcon,
  DaneelIcon,
  GiskardIcon,
  CalvinIcon
} from '../components/icons/AgentIcons';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(14, 165, 233, 0.2); }
  50% { box-shadow: 0 0 20px rgba(14, 165, 233, 0.4); }
  100% { box-shadow: 0 0 5px rgba(14, 165, 233, 0.2); }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IconWrapper = styled(Box)({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  animation: `${float} 6s ease-in-out infinite`,
  '& svg': {
    fontSize: '30px',
    color: '#0EA5E9',
  },
});

const AgentCard = styled(Box)({
  position: 'relative',
  padding: '32px',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  border: '1px solid rgba(14, 165, 233, 0.2)',
  transition: 'all 0.3s ease-in-out',
  overflow: 'hidden',
  animation: `${slideIn} 0.6s ease-out forwards`,
  '&:hover': {
    transform: 'translateY(-10px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(14, 165, 233, 0.4)',
    animation: `${glow} 2s infinite`,
  },
});

const PhaseTag = styled(Box)<{ active: boolean }>(({ active }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '50px',
  fontSize: '0.75rem',
  fontWeight: 500,
  backgroundColor: active ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255, 255, 255, 0.05)',
  color: active ? '#0EA5E9' : 'rgba(255, 255, 255, 0.7)',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: active ? 'rgba(14, 165, 233, 0.2)' : 'rgba(255, 255, 255, 0.1)',
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
    pdlc: [
      { phase: 'Planning', contribution: 'Develops product roadmap, identifies key milestones, and assesses market viability' },
      { phase: 'Design', contribution: 'Ensures design decisions align with strategic goals and user needs' },
      { phase: 'Launch', contribution: 'Coordinates launch strategy and timing for maximum impact' },
      { phase: 'Evolution', contribution: 'Plans future iterations based on market response and emerging opportunities' }
    ]
  },
  {
    title: 'Baley',
    subtitle: 'Research & Insights',
    description: 'Echoing Elijah Baley\'s investigative prowess, Baley probes markets, competitors, and user needs. As he matures, he\'ll distill vast information into actionable insights, helping you make informed, data-driven choices.',
    quote: 'Knowledge transforms uncertainty into opportunity...',
    pdlc: [
      { phase: 'Planning', contribution: 'Conducts market research, competitor analysis, and user need assessment' },
      { phase: 'Development', contribution: 'Provides ongoing user feedback and behavior analysis' },
      { phase: 'Testing', contribution: 'Analyzes user testing results and identifies improvement areas' },
      { phase: 'Evolution', contribution: 'Monitors market trends and user satisfaction for continuous improvement' }
    ]
  },
  {
    title: 'Dors',
    subtitle: 'Frontend Experience',
    description: 'Like Dors Venabili\'s gentle guidance, Dors shapes friendly, intuitive interfaces. Eventually, she\'ll craft clean layouts, fluid navigation, and a user experience that feels both natural and engaging.',
    quote: 'A well-designed interface invites exploration...',
    pdlc: [
      { phase: 'Design', contribution: 'Creates intuitive UI/UX designs and interactive prototypes' },
      { phase: 'Development', contribution: 'Implements responsive and accessible frontend components' },
      { phase: 'Testing', contribution: 'Conducts usability testing and interface refinements' },
      { phase: 'Evolution', contribution: 'Updates UI based on user feedback and modern design trends' }
    ]
  },
  {
    title: 'Daneel',
    subtitle: 'Backend & Data Logic',
    description: 'Channeling R. Daneel Olivaw\'s reliability, Daneel will handle data processes and queries. In time, he\'ll ensure your product\'s backend is efficient, stable, and always ready to serve up the right information.',
    quote: 'Structured data lays the foundation for clarity...',
    pdlc: [
      { phase: 'Design', contribution: 'Architects database schemas and API structures' },
      { phase: 'Development', contribution: 'Implements secure and efficient backend systems' },
      { phase: 'Testing', contribution: 'Performs load testing and optimization' },
      { phase: 'Evolution', contribution: 'Scales infrastructure and improves performance' }
    ]
  },
  {
    title: 'Giskard',
    subtitle: 'Integration & Cohesion',
    description: 'Reflecting R. Giskard\'s subtle interplay, Giskard will orchestrate seamless communication between systems. As he evolves, expect effortless integrations, ensuring all parts work together in perfect harmony.',
    quote: 'When every piece fits, the whole grows stronger...',
    pdlc: [
      { phase: 'Development', contribution: 'Manages system integrations and API connections' },
      { phase: 'Testing', contribution: 'Ensures cross-system compatibility and data flow' },
      { phase: 'Launch', contribution: 'Coordinates deployment of integrated systems' },
      { phase: 'Evolution', contribution: 'Maintains and updates system interconnections' }
    ]
  },
  {
    title: 'Calvin',
    subtitle: 'Quality & Evolution',
    description: 'Inspired by Susan Calvin\'s deep understanding of robotic minds, Calvin will focus on testing, refining, and iterating. Over time, she\'ll assess feedback, suggest improvements, and ensure your product continuously evolves for the better.',
    quote: 'Refinement is the engine of lasting progress...',
    pdlc: [
      { phase: 'Development', contribution: 'Implements quality assurance processes' },
      { phase: 'Testing', contribution: 'Conducts comprehensive testing and bug tracking' },
      { phase: 'Launch', contribution: 'Ensures product stability and performance' },
      { phase: 'Evolution', contribution: 'Monitors and improves product quality metrics' }
    ]
  }
];

const getAgentIcon = (title: string) => {
  switch (title) {
    case 'Seldon':
      return <SeldonIcon />;
    case 'Baley':
      return <BaleyIcon />;
    case 'Dors':
      return <DorsIcon />;
    case 'Daneel':
      return <DaneelIcon />;
    case 'Giskard':
      return <GiskardIcon />;
    case 'Calvin':
      return <CalvinIcon />;
    default:
      return <SeldonIcon />;
  }
};

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
                    <IconWrapper>
                      {getAgentIcon(agent.title)}
                    </IconWrapper>
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
                        mb: 4,
                        padding: '1rem',
                        borderLeft: '3px solid rgba(14, 165, 233, 0.3)',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(14, 165, 233, 0.05)',
                      }}
                    >
                      {agent.quote}
                    </Typography>

                    {/* PDLC Contributions */}
                    <Box sx={{ mt: 4 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          textAlign: 'center',
                          mb: 3,
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontSize: '1rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: '-8px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '40px',
                            height: '2px',
                            background: 'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.5) 50%, rgba(14, 165, 233, 0) 100%)',
                          }
                        }}
                      >
                        PDLC Contributions
                      </Typography>

                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1, 
                        justifyContent: 'center',
                        mb: 3 
                      }}>
                        {agent.pdlc.map((contribution, idx) => (
                          <PhaseTag
                            key={idx}
                            active={true}
                          >
                            {contribution.phase}
                          </PhaseTag>
                        ))}
                      </Box>

                      <Box sx={{ mt: 3 }}>
                        {agent.pdlc.map((contribution, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              mb: 2,
                              p: 2.5,
                              backgroundColor: 'rgba(14, 165, 233, 0.05)',
                              borderRadius: '12px',
                              border: '1px solid rgba(14, 165, 233, 0.1)',
                              transition: 'all 0.3s ease-in-out',
                              '&:hover': {
                                backgroundColor: 'rgba(14, 165, 233, 0.08)',
                                transform: 'translateX(5px)',
                              },
                            }}
                          >
                            <Typography
                              variant="subtitle2"
                              sx={{
                                color: '#0EA5E9',
                                fontWeight: 600,
                                mb: 1,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                '&::before': {
                                  content: '""',
                                  width: '6px',
                                  height: '6px',
                                  backgroundColor: '#0EA5E9',
                                  borderRadius: '50%',
                                }
                              }}
                            >
                              {contribution.phase}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '0.9rem',
                                lineHeight: 1.6,
                                pl: 2,
                                borderLeft: '2px solid rgba(14, 165, 233, 0.2)',
                              }}
                            >
                              {contribution.contribution}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
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
