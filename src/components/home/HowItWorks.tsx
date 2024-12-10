import React from 'react';
import { Box, Container, Typography, useTheme, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimelineStep from './TimelineStep';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' ? '#0F172A' : '#F8FAFC',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(90deg, rgba(14, 165, 233, 0.15) 0%, rgba(56, 189, 248, 0) 100%)'
      : 'linear-gradient(90deg, rgba(14, 165, 233, 0.1) 0%, rgba(56, 189, 248, 0) 100%)',
    transform: 'skewY(-6deg)',
    transformOrigin: 'top left',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(15, 0),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(10, 0),
  },
}));

const StepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(8),
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '24px',
    width: '2px',
    height: '100%',
    background: theme.palette.mode === 'dark'
      ? 'linear-gradient(180deg, rgba(14, 165, 233, 0.3) 0%, rgba(14, 165, 233, 0) 100%)'
      : 'linear-gradient(180deg, rgba(14, 165, 233, 0.2) 0%, rgba(14, 165, 233, 0) 100%)',
  },
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #0EA5E9 30%, #3B82F6 90%)',
  color: 'white',
  padding: theme.spacing(2, 6),
  borderRadius: '12px',
  textTransform: 'none',
  fontSize: '1.2rem',
  fontWeight: 600,
  marginTop: theme.spacing(8),
  boxShadow: '0 8px 32px rgba(14, 165, 233, 0.2)',
  '&:hover': {
    background: 'linear-gradient(45deg, #0284C7 30%, #2563EB 90%)',
    boxShadow: '0 8px 32px rgba(14, 165, 233, 0.4)',
    transform: 'translateY(-2px)',
  },
  transition: 'all 0.3s ease-in-out',
}));

const timelineSteps = [
  {
    icon: <LightbulbOutlinedIcon />,
    title: 'Ideation & Concept',
    description: 'Share your product idea with our AI agents. They will help refine and validate your concept through market research and user insights.',
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: 'Blueprint Generation',
    description: 'Our AI creates detailed product requirements and specifications, ensuring all aspects of your idea are thoroughly documented.',
  },
  {
    icon: <BuildOutlinedIcon />,
    title: 'Development & Iteration',
    description: 'Work with specialized AI agents to develop your product, receiving continuous feedback and suggestions for improvement.',
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: 'Launch & Scale',
    description: 'Deploy your product with confidence, backed by AI-driven insights for growth and optimization strategies.',
  },
];

const HowItWorks: React.FC = () => {
  const theme = useTheme();

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                color: '#0EA5E9',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                mb: 2,
                display: 'block',
              }}
            >
              The Process
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(90deg, #E2E8F0 0%, #94A3B8 100%)'
                  : 'linear-gradient(90deg, #1E293B 0%, #475569 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.02em',
              }}
            >
              From Idea to Reality
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Our AI-powered platform transforms your vision into a fully realized product
              through a seamless, intelligent process.
            </Typography>
          </Box>

          <StepContainer>
            {timelineSteps.map((step, index) => (
              <TimelineStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === timelineSteps.length - 1}
              />
            ))}
          </StepContainer>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ActionButton
              component={Link}
              to="/journey/start"
              variant="contained"
              size="large"
            >
              Start Your Journey
            </ActionButton>
          </Box>
        </Container>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default HowItWorks;
