import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import ParticleBackground from '../components/ParticleBackground';

interface PricingTier {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small teams and startups',
    features: [
      'Up to 5 team members',
      '10 GB storage',
      'Basic analytics',
      'Email support',
      'API access',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Professional',
    price: '$99',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 20 team members',
      '50 GB storage',
      'Advanced analytics',
      'Priority support',
      'API access',
      'Custom integrations',
      'Team collaboration tools',
    ],
    buttonText: 'Get Started',
    highlighted: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 dedicated support',
      'Advanced API access',
      'Custom development',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    buttonText: 'Contact Sales',
  },
];

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', pb: 8 }}>
      <ParticleBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8, pt: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #0EA5E9, #6366F1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="h6" sx={{ color: '#94A3B8' }}>
            Choose the perfect plan for your team's needs
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingTiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: 'rgba(17, 25, 40, 0.75)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.125)',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  ...(tier.highlighted && {
                    border: '2px solid #0EA5E9',
                    '&::before': {
                      content: '"Most Popular"',
                      position: 'absolute',
                      top: -12,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#0EA5E9',
                      color: '#fff',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    },
                  }),
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <Typography variant="h5" component="h2" sx={{ color: '#E2E8F0', mb: 2, fontWeight: 600 }}>
                    {tier.title}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" component="p" sx={{ color: '#0EA5E9', fontWeight: 700 }}>
                      {tier.price}
                      <Typography component="span" variant="h6" sx={{ color: '#94A3B8', ml: 1 }}>
                        {tier.period}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#94A3B8', mt: 1 }}>
                      {tier.description}
                    </Typography>
                  </Box>
                  <List sx={{ mb: 4 }}>
                    {tier.features.map((feature) => (
                      <ListItem key={feature} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#0EA5E9' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature} 
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              color: '#E2E8F0',
                              fontSize: '0.875rem',
                            } 
                          }} 
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button
                    fullWidth
                    variant={tier.highlighted ? 'contained' : 'outlined'}
                    sx={{
                      py: 1.5,
                      backgroundColor: tier.highlighted ? '#0EA5E9' : 'transparent',
                      borderColor: '#0EA5E9',
                      color: tier.highlighted ? '#fff' : '#0EA5E9',
                      '&:hover': {
                        backgroundColor: tier.highlighted ? '#0284C7' : 'rgba(14, 165, 233, 0.1)',
                      },
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="body1" sx={{ color: '#94A3B8', mb: 2 }}>
            All plans include a 14-day free trial. No credit card required.
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B' }}>
            Need a custom solution? <Button sx={{ color: '#0EA5E9' }}>Contact our sales team</Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
