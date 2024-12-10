import { Box, Button, Container, Typography, styled, Grid, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RocketIcon from '@mui/icons-material/Rocket';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import BrainIcon from '@mui/icons-material/Psychology';
import ParticleBackground from '../components/ParticleBackground';

const EarlyAccessBadge = styled('div')(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? 'rgba(14, 165, 233, 0.15)'
    : 'rgba(14, 165, 233, 0.1)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(14, 165, 233, 0.3)',
  borderRadius: '8px',
  padding: '8px 16px',
  color: '#0EA5E9',
  fontSize: '0.875rem',
  fontWeight: 600,
  display: 'inline-block',
  marginBottom: '2rem',
  letterSpacing: '0.05em',
}));

const GradientText = styled('span')(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)'
    : 'linear-gradient(135deg, #0284C7 0%, #0EA5E9 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 500,
  minWidth: '180px',
  height: '48px',
  borderRadius: '8px',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  border: '1px solid #0EA5E9',
  color: '#0EA5E9',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(14, 165, 233, 0.2)'
      : 'rgba(14, 165, 233, 0.15)',
    transform: 'translateY(-2px)',
  },
  '&.MuiButton-contained': {
    backgroundColor: '#0EA5E9',
    color: '#fff',
    border: 'none',
    '&:hover': {
      backgroundColor: '#0284C7',
      transform: 'translateY(-2px)',
    },
  },
  '&.MuiButton-outlined': {
    backgroundColor: 'transparent',
    border: '1px solid #0EA5E9',
    color: '#0EA5E9',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark'
        ? 'rgba(14, 165, 233, 0.1)'
        : 'rgba(14, 165, 233, 0.08)',
      transform: 'translateY(-2px)',
    },
  },
}));

const ProgressCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.6)'
    : 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.1)'}`,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(15, 23, 42, 0.8)'
      : 'rgba(255, 255, 255, 0.9)',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.2)'
      : '0 8px 32px rgba(14, 165, 233, 0.1)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '32px',
    color: '#0EA5E9',
  },
}));

const Home = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ParticleBackground variant={theme.palette.mode === 'dark' ? 'sparse' : 'light'} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: theme.palette.mode === 'dark'
            ? 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15), rgba(15, 23, 42, 0) 70%)'
            : 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.1), rgba(241, 245, 249, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 2,
          pt: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          <EarlyAccessBadge>Now in early access</EarlyAccessBadge>
          
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 700,
              mb: 2,
              color: theme.palette.mode === 'dark' ? '#fff' : '#1E293B',
            }}
          >
            Transform Ideas into <GradientText>Reality</GradientText>
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
              fontWeight: 500,
              mb: 4,
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
            }}
          >
            It starts with an <GradientText>Idea</GradientText>
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 8 }}>
            <ActionButton 
              variant="contained" 
              startIcon={<RocketLaunchIcon />}
              component={RouterLink}
              to="/auth/signup"
            >
              START YOUR JOURNEY
            </ActionButton>
            <ActionButton 
              variant="outlined" 
              startIcon={<CodeIcon />}
              component={RouterLink}
              to="/features"
            >
              EXPLORE FEATURES
            </ActionButton>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {[
            {
              icon: <BrainIcon />,
              number: '3',
              title: 'AI Modules in Progress',
              description: "We're exploring intelligent helpers designed to assist at every phase, ensuring that as your idea grows, so does our support."
            },
            {
              icon: <AutorenewIcon />,
              number: '2',
              title: 'Refined by Your Feedback',
              description: 'Every suggestion matters. With each insight we gather, we adjust course, shaping the platform to reflect what you truly need.'
            },
            {
              icon: <RocketIcon />,
              number: '1',
              title: 'A Prototype Emerging',
              description: 'Our first working model is taking shape - an early glimpse of what is possible when the right tools align with your vision.'
            },
            {
              icon: <AllInclusiveIcon />,
              number: '∞',
              title: 'Unlimited Potential',
              description: 'This is just the start. As we learn, evolve, and expand, the horizon keeps opening, inviting you to dream bigger and build bolder.'
            }
          ].map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProgressCard>
                <IconCircle>
                  {card.icon}
                </IconCircle>
                <Typography 
                  variant="h2" 
                  sx={{ 
                    fontSize: '3rem', 
                    fontWeight: 700, 
                    mb: 1,
                    color: theme.palette.mode === 'dark' ? '#0EA5E9' : '#0284C7',
                  }}
                >
                  {card.number}
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                  }}
                >
                  {card.description}
                </Typography>
              </ProgressCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
