import { Box, Button, Container, Typography, styled, Paper } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const GradientText = styled('span')({
  background: 'linear-gradient(90deg, #2196F3 0%, #00BCD4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  background: 'rgba(15, 23, 42, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(148, 163, 184, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(15, 23, 42, 0.8)',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    boxShadow: '0 8px 30px rgba(14, 165, 233, 0.15)',
    '& .MuiSvgIcon-root': {
      color: '#0EA5E9',
      transform: 'scale(1.1)',
    },
    '& .MuiTypography-h5': {
      color: '#0EA5E9',
    }
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    marginBottom: theme.spacing(2),
    transition: 'all 0.3s ease',
  },
  '& .MuiTypography-h5': {
    marginBottom: theme.spacing(2),
    transition: 'color 0.3s ease',
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '10px 24px',
  fontSize: '1rem',
  textTransform: 'none',
  margin: theme.spacing(1),
}));

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      {/* Hero Section */}
      <Container maxWidth={false} sx={{ 
        pt: { xs: 8, sm: 12, md: 16 },
        pb: { xs: 8, sm: 12 },
        position: 'relative',
        zIndex: 1,
        px: { xs: 2, sm: 4, md: 6, lg: 8 }
      }}>
        <Typography variant="caption" sx={{ 
          bgcolor: 'rgba(14, 165, 233, 0.1)', 
          color: '#38BDF8',
          px: 3,
          py: 1.5,
          borderRadius: '50px',
          display: 'inline-block',
          mb: 4,
          mt: 8,
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(14, 165, 233, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(14, 165, 233, 0.2)',
          }
        }}>
          Now in Early Access
        </Typography>
        
        <Typography variant="h2" component="h1" sx={{ 
          mb: 2, 
          fontWeight: 'bold',
          position: 'relative',
          textShadow: '0 0 40px rgba(14, 165, 233, 0.1)',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '140%',
            height: '140%',
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0) 70%)',
            zIndex: -1,
          }
        }}>
          Transform Ideas into <GradientText>Reality</GradientText>
        </Typography>
        
        <Typography variant="h6" sx={{ 
          mb: 4, 
          color: '#94A3B8', 
          maxWidth: '800px', 
          mx: 'auto',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          p: 2,
          background: 'rgba(15, 23, 42, 0.6)',
        }}>
          Join us on the journey of building the next generation of creative tools. We're crafting an AI-powered
          platform that turns inspiration into innovation.
        </Typography>

        <Box>
          <StyledButton variant="contained" color="primary" startIcon={<RocketLaunchIcon />}>
            Start Your Journey
          </StyledButton>
          <StyledButton variant="outlined" color="primary">
            Explore Features
          </StyledButton>
        </Box>
      </Container>

      {/* Idea Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', mb: 15 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <LightbulbIcon sx={{ fontSize: 40, color: '#2196F3' }} />
        </Box>
        <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
          It Starts with an <GradientText>Idea</GradientText>
        </Typography>
        <Typography sx={{ mb: 8, color: 'grey.400', maxWidth: '800px', mx: 'auto' }}>
          We're at the dawn of something new: a platform that transforms a spark of inspiration
          into a tangible concept you can test and refine. It's early, and there's still so much to
          discover—but that's part of the excitement. Through honest feedback, steady iteration,
          and a growing set of AI-driven capabilities, we're laying the first building blocks of a
          more intuitive, frictionless creation process.
        </Typography>

        {/* Feature Cards */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
          gap: 4 
        }}>
          <FeatureCard sx={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}>
            <PsychologyIcon sx={{ fontSize: 40, color: '#0EA5E9', mb: 2 }} />
            <Typography variant="h2" sx={{ mb: 1, color: '#0EA5E9' }}>3</Typography>
            <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>AI Modules in Progress</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              We're exploring intelligent helpers designed to assist at every phase, ensuring that as your idea grows, so does our support.
            </Typography>
          </FeatureCard>

          <FeatureCard sx={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}>
            <AutorenewIcon sx={{ fontSize: 40, color: '#0EA5E9', mb: 2 }} />
            <Typography variant="h2" sx={{ mb: 1, color: '#0EA5E9' }}>2</Typography>
            <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>Refined by Your Feedback</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              Every suggestion matters. With each insight we gather, we adjust course, shaping the platform to reflect what you truly need.
            </Typography>
          </FeatureCard>

          <FeatureCard sx={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}>
            <RocketLaunchIcon sx={{ fontSize: 40, color: '#0EA5E9', mb: 2 }} />
            <Typography variant="h2" sx={{ mb: 1, color: '#0EA5E9' }}>1</Typography>
            <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>A Prototype Emerging</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              Our first working model is taking shape - an early glimpse of what's possible when the right tools align with your vision.
            </Typography>
          </FeatureCard>

          <FeatureCard sx={{
            background: 'rgba(15, 23, 42, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          }}>
            <AllInclusiveIcon sx={{ fontSize: 40, color: '#0EA5E9', mb: 2 }} />
            <Typography variant="h2" sx={{ mb: 1, color: '#0EA5E9' }}>∞</Typography>
            <Typography variant="h6" sx={{ mb: 2, color: '#E2E8F0' }}>Unlimited Potential</Typography>
            <Typography variant="body2" sx={{ color: '#94A3B8' }}>
              This is just the start. As we learn, evolve, and expand, the horizon keeps opening, inviting you to dream bigger and build bolder.
            </Typography>
          </FeatureCard>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
