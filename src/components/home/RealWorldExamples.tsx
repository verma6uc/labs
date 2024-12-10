import React from 'react';
import { Box, Container, Grid, Typography, useTheme, Button, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import ExampleCard from './ExampleCard';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const examples = [
  {
    title: 'Landing Page Launch',
    description: 'Turned a product concept into a polished landing page. Received blueprint, PRD, and metrics tracking sign-up conversions in under an hour.',
    image: '/images/examples/landing-page.jpg',
  },
  {
    title: 'Competitor Analysis Dashboard',
    description: 'From a brief idea to a structured comparison table and integrated analytics. The system suggested KPIs and we adapted them on the fly.',
    image: '/images/examples/dashboard.jpg',
  },
  {
    title: 'Documentation from Git Repo',
    description: 'Pointed the system at a source code repository and got a full developer guide and PRD, saving days of manual documentation work.',
    image: '/images/examples/documentation.jpg',
  },
];

const RealWorldExamples: React.FC = () => {
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
            Real Projects, Real Results
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            See how teams are using Creator Labs to bring their ideas to life
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {examples.map((example, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ExampleCard
                title={example.title}
                description={example.description}
                image={example.image}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/solutions"
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
            See More Use Cases
          </Button>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default RealWorldExamples;
