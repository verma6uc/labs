import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GradientText, FeatureCard, IconWrapper, GlassButton } from '../components/shared/StyledComponents';
import ParticleBackground from '../components/ParticleBackground';
import {
  AutoAwesome,
  Code,
  Psychology,
  Hub as HubIcon,
  Search as SearchIcon,
  Extension as ExtensionIcon,
  Timeline as TimelineIcon,
  Lightbulb as LightbulbIcon,
  Public as PublicIcon,
  Hexagon as HexagonIcon,
  Description as DescriptionIcon,
  BarChart as BarChartIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <FeatureCard sx={{
    height: '100%',
    background: 'rgba(13, 25, 41, 0.5)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '&:hover': {
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    }
  }}>
    <IconWrapper sx={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'primary.main'
    }}>
      {icon}
    </IconWrapper>
    <Typography variant="h6" sx={{ color: 'white' }} gutterBottom>{title}</Typography>
    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
      {description}
    </Typography>
  </FeatureCard>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description
}) => (
  <FeatureCard sx={{
    height: '100%',
    background: 'rgba(13, 25, 41, 0.5)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    p: 4,
    '&:hover': {
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    }
  }}>
    <IconWrapper sx={{
      width: 56,
      height: 56,
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'primary.main',
      mb: 3
    }}>
      {icon}
    </IconWrapper>
    <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>{title}</Typography>
    <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.7 }}>
      {description}
    </Typography>
  </FeatureCard>
);

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number }> = ({
  icon,
  title,
  description,
  index
}) => (
  <Box sx={{ 
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 24,
      top: 48,
      bottom: -48,
      width: 2,
      background: 'linear-gradient(180deg, rgba(0, 163, 255, 0.3) 0%, rgba(0, 163, 255, 0) 100%)',
      display: index === 5 ? 'none' : 'block'
    }
  }}>
    <Box sx={{ 
      display: 'flex',
      gap: 3,
      mb: 6,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: -16,
        top: 24,
        width: 16,
        height: 2,
        backgroundColor: 'rgba(0, 163, 255, 0.3)',
      }
    }}>
      <Box sx={{ position: 'relative' }}>
        <IconWrapper sx={{
          width: 48,
          height: 48,
          flexShrink: 0,
          backgroundColor: 'rgba(0, 163, 255, 0.1)',
          color: '#00A3FF',
          position: 'relative',
          zIndex: 2,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 163, 255, 0.2)',
            transform: 'scale(1.1)'
          }
        }}>
          {icon}
        </IconWrapper>
        <Typography sx={{
          position: 'absolute',
          left: -40,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'rgba(255, 255, 255, 0.4)',
          fontSize: '0.875rem',
          fontWeight: 600
        }}>
          {(index + 1).toString().padStart(2, '0')}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ 
          color: 'white', 
          mb: 1,
          fontSize: '1.25rem',
          fontWeight: 600,
          background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255, 255, 255, 0.7)',
          lineHeight: 1.7,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: -24,
            top: '50%',
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 163, 255, 0.3)',
          }
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  </Box>
);

const Home: React.FC = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <AutoAwesome />,
      title: 'AI-Powered Creation',
      description: 'Transform your ideas into reality with advanced AI assistance at every step'
    },
    {
      icon: <Psychology />,
      title: 'Intelligent Insights',
      description: 'Get real-time suggestions and improvements as you build your product'
    },
    {
      icon: <Code />,
      title: 'Code Generation',
      description: 'Automatically generate high-quality, production-ready code'
    },
    {
      icon: <HubIcon />,
      title: 'Seamless Integration',
      description: 'Works with your existing tools and workflows effortlessly'
    }
  ];

  const valueProps = [
    {
      icon: <SearchIcon />,
      title: 'AI Insights at Every Step',
      description: 'Our research agents analyze market data and user behavior to recommend features, brand archetypes, and improvement paths—ensuring your product aligns with real-world needs.'
    },
    {
      icon: <ExtensionIcon />,
      title: 'Blueprinting & PRD Generation',
      description: 'Turn abstract ideas into actionable plans. Create navigation flows, define sections, integrate metrics, and produce a detailed PRD ready for development.'
    },
    {
      icon: <TimelineIcon />,
      title: 'Continuous Feedback & Metrics',
      description: 'Refine your blueprint by providing direct feedback. Add or remove metrics, adjust page sections, and watch the system adapt, ensuring you always move closer to your desired outcomes.'
    },
    {
      icon: <HubIcon />,
      title: 'Seamless Integrations & Scalability',
      description: 'Easily integrate with external services, analytics tools, or data sources. Our flexible architecture and unified ontology ensure every piece fits harmoniously.'
    }
  ];

  const timelineSteps = [
    {
      icon: <LightbulbIcon />,
      title: 'Start with an Idea',
      description: 'Provide a short description of what you want to create—no technical details needed.'
    },
    {
      icon: <PublicIcon />,
      title: 'AI-Driven Research',
      description: 'Our agents analyze competitors, market context, and user patterns, turning your vague concept into structured recommendations.'
    },
    {
      icon: <HexagonIcon />,
      title: 'Blueprint Generation',
      description: 'We produce a visual map of pages, sections, features, and metrics. Drag and drop to rearrange, rename, or remove elements.'
    },
    {
      icon: <DescriptionIcon />,
      title: 'PRD & Documentation',
      description: 'Receive a detailed Product Requirements Document and integrated references—ready to hand off to a development team or use as your actionable guide.'
    },
    {
      icon: <BarChartIcon />,
      title: 'Add Metrics & Integrations',
      description: 'Define KPIs, track performance, and connect to external platforms. Tweak metrics anytime to measure real success.'
    },
    {
      icon: <RefreshIcon />,
      title: 'Continuous Refinement',
      description: 'Give feedback at each stage. Every comment, suggestion, or data point feeds back into our system, improving recommendations and outcomes over time.'
    }
  ];

  return (
    <Box sx={{ 
      position: 'relative', 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0A1929 0%, #1A2942 100%)',
      color: 'white',
      overflow: 'hidden'
    }}>
      <ParticleBackground />
      
      <Box sx={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%',
        px: { xs: 2, sm: 4, md: 6 }, 
        py: { xs: 8, md: 12 } 
      }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 }, maxWidth: '1200px', mx: 'auto' }}>
          <GradientText variant="h1" sx={{ 
            mb: 3, 
            fontSize: { xs: '2.5rem', md: '4rem' }, 
            fontWeight: 700,
            letterSpacing: '-0.02em',
            background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Creator Labs
          </GradientText>
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Transform your ideas into fully realized products with our AI-powered platform
          </Typography>
          <GlassButton
            className="primary"
            size="large"
          >
            Start Creating
          </GlassButton>
        </Box>

        {/* Value Proposition Cards */}
        <Box sx={{ maxWidth: '1400px', mx: 'auto', mb: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {valueProps.map((prop, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ValueCard {...prop} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Features Section */}
        <Box sx={{ maxWidth: '1400px', mx: 'auto', mb: { xs: 8, md: 12 } }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <FeatureItem {...feature} />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ 
          maxWidth: '1200px', 
          mx: 'auto',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '1px',
            background: 'rgba(255, 255, 255, 0.1)'
          }
        }}>
          <Typography variant="h2" sx={{ 
            textAlign: 'center',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 700,
            mb: 3,
            background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            How It Works: A Guided Path from Concept to Completion
          </Typography>
          <Typography sx={{ 
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            maxWidth: '800px',
            mx: 'auto',
            mb: 12,
            lineHeight: 1.6
          }}>
            Building something extraordinary doesn't have to be complicated. We've designed a step-by-step journey where your idea evolves effortlessly through AI-driven insights, user feedback loops, and intelligent orchestration.
          </Typography>

          <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative',
            pl: { xs: 6, md: 8 }
          }}>
            {timelineSteps.map((step, index) => (
              <TimelineStep {...step} index={index} key={index} />
            ))}
          </Box>
        </Box>

        <Box sx={{ 
          mt: { xs: 8, md: 12 }, 
          textAlign: 'center',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          <Typography variant="h3" sx={{ 
            mb: 3,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            fontWeight: 600,
            color: 'white'
          }}>
            Ready to Build Something Amazing?
          </Typography>
          <Typography sx={{ 
            maxWidth: '600px', 
            mx: 'auto',
            mb: 4,
            fontSize: '1.1rem'
          }}>
            Join us in revolutionizing the way products are built. Experience the power of AI-assisted creation.
          </Typography>
          <GlassButton
            className="secondary"
            size="large"
          >
            Learn More
          </GlassButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
