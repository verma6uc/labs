import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import ParticleBackground from '../components/ParticleBackground';
import HowItWorks from '../components/home/HowItWorks';
import AgentsIntroduction from '../components/home/AgentsIntroduction';
import TrustSection from '../components/home/TrustSection';
import { AIInsightsIcon, BlueprintIcon, FeedbackIcon, IntegrationIcon } from '../components/icons/CustomIcons';

const PageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
});

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : '#F8FAFC',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.15), rgba(10, 25, 41, 0) 70%)'
      : 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), rgba(248, 250, 252, 0) 70%)',
  },
}));

const GlowingIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '24px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  position: 'relative',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    width: '40px',
    height: '40px',
    color: '#0EA5E9',
    filter: 'drop-shadow(0 0 8px rgba(14, 165, 233, 0.5))',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-1px',
    borderRadius: 'inherit',
    padding: '1px',
    background: 'linear-gradient(45deg, #0EA5E9, #38BDF8)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: 'inherit',
    background: 'linear-gradient(45deg, #0EA5E9, #38BDF8)',
    filter: 'blur(8px)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    '&::after': {
      opacity: 0.3,
    },
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(10, 25, 41, 0.7)'
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(10, 25, 41, 0.8)'
      : 'rgba(255, 255, 255, 0.95)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 20px 40px rgba(0, 0, 0, 0.4)'
      : '0 20px 40px rgba(14, 165, 233, 0.15)',
  },
}));

const features = [
  {
    icon: <AIInsightsIcon />,
    title: 'AI Insights',
    description: 'Get real-time feedback and suggestions powered by advanced AI algorithms',
  },
  {
    icon: <BlueprintIcon />,
    title: 'Blueprinting & PRD',
    description: 'Generate comprehensive product requirements and specifications automatically',
  },
  {
    icon: <FeedbackIcon />,
    title: 'Continuous Feedback',
    description: 'Receive ongoing suggestions for improvement throughout development',
  },
  {
    icon: <IntegrationIcon />,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and workflows effortlessly',
  },
];

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <PageWrapper>
      <ParticleBackground />
      
      <HeroSection>
        <Box sx={{ maxWidth: '1400px', width: '100%', px: 3 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3.5rem', sm: '4.5rem', md: '6rem' },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              mb: 3,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #E2E8F0 0%, #94A3B8 100%)'
                : 'linear-gradient(135deg, #1E293B 0%, #475569 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center',
              filter: 'drop-shadow(0 4px 6px rgba(14, 165, 233, 0.2))',
            }}
          >
            Creator Labs
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
              fontWeight: 600,
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              mb: 10,
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 1.4,
              textShadow: theme.palette.mode === 'dark'
                ? '0 2px 4px rgba(0, 0, 0, 0.5)'
                : '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            AI-powered platform that transforms your vision into fully realized products
          </Typography>

          <Grid container spacing={4} sx={{ maxWidth: '1400px', mx: 'auto' }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureCard>
                  <GlowingIcon>
                    {feature.icon}
                  </GlowingIcon>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                    }}
                  >
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </HeroSection>

      <HowItWorks />
      <AgentsIntroduction />
      <TrustSection />
    </PageWrapper>
  );
};

export default Home;
