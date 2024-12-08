import { Box, Button, Container, Typography, styled, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RocketIcon from '@mui/icons-material/Rocket';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import BrainIcon from '@mui/icons-material/Psychology';
import ParticleBackground from '../components/ParticleBackground';

const EarlyAccessBadge = styled('div')({
  background: 'rgba(14, 165, 233, 0.15)',
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
});

const GradientText = styled('span')({
  background: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline',
});

const ActionButton = styled(Button)({
  padding: '12px 24px',
  fontSize: '1rem',
  fontWeight: 500,
  minWidth: '180px',
  height: '48px',
  borderRadius: '0',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  border: '1px solid #0EA5E9',
  color: '#0EA5E9',
  '&:hover': {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    transform: 'translateY(-2px)',
  },
  '&.MuiButton-contained': {
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    color: '#0EA5E9',
    border: '1px solid #0EA5E9',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      transform: 'translateY(-2px)',
    },
  },
  '&.MuiButton-outlined': {
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    border: '1px solid #0EA5E9',
    color: '#0EA5E9',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.2)',
      transform: 'translateY(-2px)',
    },
  },
});

const ProgressCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '50%',
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '32px',
    color: '#0EA5E9',
  },
}));

const NumberText = styled(Typography)(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 700,
  background: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: theme.spacing(2),
}));

const Home: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground variant="default" />
      {/* Hero Section */}
      <Box sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
      }}>
        <Container 
          maxWidth={false} 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: { xs: 12, md: 16 },
          }}
        >
          <EarlyAccessBadge>
            Now in early access
          </EarlyAccessBadge>

          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 3,
              color: '#fff',
              lineHeight: 1.2,
              textShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            Transform Ideas into{' '}
            <GradientText>Reality</GradientText>
          </Typography>

          <Typography 
            variant="h5" 
            sx={{ 
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              mx: 'auto',
              mb: 6,
              lineHeight: 1.6,
              backdropFilter: 'blur(4px)',
            }}
          >
            Join us on the journey of building the next generation of creative tools. We're crafting an AI-powered
            platform that turns inspiration into innovation.
          </Typography>

          <Box sx={{ 
            display: 'flex', 
            gap: 2, 
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <ActionButton
              component={RouterLink}
              to="/auth/signup"
              variant="contained"
              startIcon={<RocketLaunchIcon />}
            >
              Start Your Journey
            </ActionButton>

            <ActionButton
              component={RouterLink}
              to="/features"
              variant="outlined"
              startIcon={<CodeIcon />}
            >
              Explore Features
            </ActionButton>
          </Box>
        </Container>
      </Box>

      {/* Idea Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, width: '100%' }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <IconCircle sx={{ mx: 'auto', mb: 3 }}>
              <LightbulbIcon />
            </IconCircle>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                fontWeight: 700,
                mb: 3,
                color: '#fff',
                '& .highlight': {
                  color: '#0EA5E9',
                },
              }}
            >
              It Starts with an <span className="highlight">Idea</span>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem' },
                color: 'rgba(255, 255, 255, 0.8)',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.8,
                backdropFilter: 'blur(4px)',
              }}
            >
              We're at the dawn of something new: a platform that transforms a spark of inspiration
              into a tangible concept you can test and refine. It's early, and there's still so much to
              discover—but that's part of the excitement. Through honest feedback, steady iteration,
              and a growing set of AI-driven capabilities, we're laying the first building blocks of a
              more intuitive, frictionless creation process.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={3}>
              <ProgressCard>
                <IconCircle>
                  <BrainIcon />
                </IconCircle>
                <NumberText>3</NumberText>
                <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
                  AI Modules in Progress
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  We're exploring intelligent helpers designed to assist at every phase, ensuring that as your idea grows, so does our support.
                </Typography>
              </ProgressCard>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <ProgressCard>
                <IconCircle>
                  <AutorenewIcon />
                </IconCircle>
                <NumberText>2</NumberText>
                <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
                  Refined by Your Feedback
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Every suggestion matters. With each insight we gather, we adjust course, shaping the platform to reflect what you truly need.
                </Typography>
              </ProgressCard>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <ProgressCard>
                <IconCircle>
                  <RocketIcon />
                </IconCircle>
                <NumberText>1</NumberText>
                <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
                  A Prototype Emerging
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  Our first working model is taking shape - an early glimpse of what's possible when the right tools align with your vision.
                </Typography>
              </ProgressCard>
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <ProgressCard>
                <IconCircle>
                  <AllInclusiveIcon />
                </IconCircle>
                <NumberText>∞</NumberText>
                <Typography variant="h6" sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
                  Unlimited Potential
                </Typography>
                <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  This is just the start. As we learn, evolve, and expand, the horizon keeps opening, inviting you to dream bigger and build bolder.
                </Typography>
              </ProgressCard>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
