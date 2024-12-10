import React from 'react';
import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SecurityIcon from '@mui/icons-material/Security';
import BalanceIcon from '@mui/icons-material/Balance';
import SearchIcon from '@mui/icons-material/Search';

const SectionWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.6)'
    : 'rgba(241, 245, 249, 0.6)',
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  backgroundColor: theme.palette.mode === 'dark'
    ? 'rgba(14, 165, 233, 0.1)'
    : 'rgba(14, 165, 233, 0.08)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    width: '40px',
    height: '40px',
    color: '#0EA5E9',
  },
}));

const features = [
  {
    icon: <SecurityIcon />,
    title: 'Security First',
    description: 'Your data and intellectual property are protected with enterprise-grade security measures.',
  },
  {
    icon: <BalanceIcon />,
    title: 'Fair & Ethical',
    description: 'Our AI makes decisions based on transparent criteria, ensuring fairness in every interaction.',
  },
  {
    icon: <SearchIcon />,
    title: 'Full Transparency',
    description: 'Access detailed insights into AI decision-making processes and performance metrics.',
  },
];

const TrustSection: React.FC = () => {
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
            Built for Trust and Growth
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            We believe in building trust through transparency, security, and measurable results.
            Every decision our AI makes is explainable, every metric is clear, and your data
            is always protected.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <IconWrapper>
                  {feature.icon}
                </IconWrapper>
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
                    maxWidth: '300px',
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TrustSection;
