import { Box, Container, Typography, Card, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ScienceIcon from '@mui/icons-material/Science';
import SchoolIcon from '@mui/icons-material/School';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { fadeInRight } from '../components/animations';

// Industry-specific colors
const industryColors = {
  pharma: {
    main: '#10B981', // Emerald
    light: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.2)'
  },
  edtech: {
    main: '#8B5CF6', // Purple
    light: 'rgba(139, 92, 246, 0.1)',
    border: 'rgba(139, 92, 246, 0.2)'
  },
  b2c: {
    main: '#F59E0B', // Amber
    light: 'rgba(245, 158, 11, 0.1)',
    border: 'rgba(245, 158, 11, 0.2)'
  }
};

interface SolutionCardProps {
  industry: 'pharma' | 'edtech' | 'b2c';
}

const SolutionCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'industry'
})<SolutionCardProps>(({ theme, industry }) => ({
  background: industryColors[industry].light,
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: `1px solid ${industryColors[industry].border}`,
  padding: theme.spacing(4),
  height: '100%',
  transition: 'all 0.4s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 8px 30px ${industryColors[industry].border}`,
  }
}));

const SolutionIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'industry'
})<SolutionCardProps>(({ theme, industry }) => ({
  background: industryColors[industry].light,
  borderRadius: '12px',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'inline-flex',
  '& svg': {
    fontSize: 40,
    color: industryColors[industry].main,
  }
}));

const SolutionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'industry'
})<SolutionCardProps>(({ theme, industry }) => ({
  fontWeight: 700,
  fontSize: '1.8rem',
  color: industryColors[industry].main,
  marginBottom: theme.spacing(2),
}));

const FeatureList = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  '& li': {
    position: 'relative',
    padding: '8px 0 8px 30px',
    color: 'rgba(255, 255, 255, 0.8)',
    '&:before': {
      content: '"•"',
      position: 'absolute',
      left: 0,
      fontSize: '1.5rem',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    '&:hover': {
      transform: 'translateX(10px)',
      transition: 'all 0.3s ease',
    }
  }
}));

const Solutions = () => {
  const solutions = [
    {
      icon: <ScienceIcon />,
      title: 'Pharma Manufacturing Solutions',
      description: 'Quality Control Suite',
      industry: 'pharma' as const,
      features: [
        { title: 'Material Test Packet Checklist' },
        { title: 'Related Substance Test (RST)' },
        { title: 'Dissolution Test' },
        { title: 'Assay Test' },
        { title: 'Impurity Test' },
        { title: 'Stability Study' }
      ]
    },
    {
      icon: <SchoolIcon />,
      title: 'EdTech Solutions',
      description: 'Comprehensive education management system',
      industry: 'edtech' as const,
      features: [
        { title: 'Student Lifecycle Management' },
        { title: 'Admission Pipeline Tracking' },
        { title: 'Course Management' },
        { title: 'Faculty Management' },
        { title: 'Exam Management' },
        { title: 'Performance Analytics' }
      ]
    },
    {
      icon: <ShoppingCartIcon />,
      title: 'B2C Solutions',
      description: 'AI-powered e-commerce platform',
      industry: 'b2c' as const,
      features: [
        { title: 'Personalized Recommendations' },
        { title: 'Smart Inventory Management' },
        { title: 'Dynamic Pricing' },
        { title: 'Customer Segmentation' },
        { title: 'Demand Forecasting' },
        { title: 'Churn Prevention' }
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            textAlign: 'center', 
            mb: 2,
            fontWeight: 700 
          }}
        >
          Solutions
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            color: 'rgba(255, 255, 255, 0.7)' 
          }}
        >
          Tailored AI solutions for your industry needs
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <SolutionCard industry={solution.industry}>
                <SolutionIcon industry={solution.industry}>
                  {solution.icon}
                </SolutionIcon>
                
                <SolutionTitle industry={solution.industry}>
                  {solution.title}
                </SolutionTitle>

                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    mb: 3 
                  }}
                >
                  {solution.description}
                </Typography>

                <FeatureList>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Typography>{feature.title}</Typography>
                    </li>
                  ))}
                </FeatureList>
              </SolutionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions;
