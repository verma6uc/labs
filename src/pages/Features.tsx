import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AIResearchIcon,
  BlueprintIcon,
  BrandArchetypeIcon,
  UnifiedOntologyIcon,
  PRDGenerationIcon,
  FeedbackLoopIcon,
  MetricsIcon,
  IntegrationIcon,
  AdaptiveIntelligenceIcon,
  ScalabilityIcon,
} from '../components/FeatureIcons';
import ParticleBackground from '../components/ParticleBackground';

const FeatureCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(4),
  height: '100%',
  minHeight: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  },
}));

const IconWrapper = styled(Box)({
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
});

const features = [
  {
    title: 'AI-Driven Research & Insights',
    description: 'Harness the power of AI to analyze user ideas and market context, delivering intelligent recommendations that shape your product strategy. Our system processes vast amounts of data to provide actionable insights.',
    icon: <AIResearchIcon />,
  },
  {
    title: 'Outcome-Focused Blueprint Generation',
    description: 'Create dynamic visual blueprints that map out your product journey. Easily modify navigation flows and user paths while maintaining a clear view of your desired outcomes.',
    icon: <BlueprintIcon />,
  },
  {
    title: 'Section Archetypes & Brand Alignment',
    description: 'Access a library of predefined templates that ensure consistent brand representation across all product components. Customize and adapt these archetypes to match your unique brand identity.',
    icon: <BrandArchetypeIcon />,
  },
  {
    title: 'Unified Ontology for Seamless Integration',
    description: 'Maintain consistent definitions and terminology across all components, reducing confusion and streamlining communication between team members and stakeholders.',
    icon: <UnifiedOntologyIcon />,
  },
  {
    title: 'Refinable PRD Generation',
    description: 'Automatically generate detailed Product Requirements Documents that can be refined and aligned with team feedback. Keep your documentation current and comprehensive.',
    icon: <PRDGenerationIcon />,
  },
  {
    title: 'User-Centric Feedback Loops',
    description: 'Integrate direct user feedback through built-in tools, enabling continuous improvement and validation of your product decisions. Create a dialogue with your users that drives product evolution.',
    icon: <FeedbackLoopIcon />,
  },
  {
    title: 'Metrics Management & Continuous Improvement',
    description: 'Track key performance indicators and leverage data-driven insights to iterate and improve your product continuously. Our system suggests relevant KPIs and helps monitor progress.',
    icon: <MetricsIcon />,
  },
  {
    title: 'Integration with External Services',
    description: 'Connect seamlessly with your favorite tools and services. Our platform works harmoniously with your existing tech stack, enhancing rather than replacing your current workflow.',
    icon: <IntegrationIcon />,
  },
  {
    title: 'Adaptive Intelligence & Ongoing Learning',
    description: 'Benefit from AI agents that learn from feedback and accumulated data to continuously improve their recommendations and insights, making your product development smarter over time.',
    icon: <AdaptiveIntelligenceIcon />,
  },
  {
    title: 'Scalable to Various Project Types',
    description: 'Whether you\'re building landing pages, documentation sites, or complex web applications, our platform adapts to your needs, providing relevant features and insights for each project type.',
    icon: <ScalabilityIcon />,
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <ParticleBackground variant="sparse" />
      <Box sx={{ 
        py: { xs: 12, md: 16 }, 
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}>
        <Container maxWidth={false} sx={{ 
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          position: 'relative',
          zIndex: 2,
        }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              component="span"
              sx={{
                display: 'inline-block',
                background: 'rgba(14, 165, 233, 0.2)',
                border: '1px solid rgba(14, 165, 233, 0.4)',
                borderRadius: 0,
                px: 2,
                py: 1,
                mb: 4,
                color: '#0EA5E9',
                fontSize: '0.875rem',
                fontWeight: 500,
              }}
            >
              Cutting-Edge Capabilities
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                fontWeight: 700,
                mb: 3,
                '& .highlight': {
                  color: '#0EA5E9',
                }
              }}
            >
              Where <span className="highlight">Innovation</span> Meets Intelligence
            </Typography>

            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                color: 'rgba(255, 255, 255, 0.7)',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Advanced AI tools and features designed to amplify your creative potential 
              and streamline development
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FeatureCard>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    component="h3"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Features;
