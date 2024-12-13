import React from 'react';
import { Box, Typography, Paper, Grid, Chip, Button } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import StepNavigation from '../components/StepNavigation';
import { StepProps } from '../types';
import { motion } from 'framer-motion';
import {
  onboardingContainerStyles,
  onboardingContentStyles,
  paperStyles,
} from '../styles/OnboardingStyles';
import {
  BusinessCenter as BusinessIcon,
  Palette as PaletteIcon,
  Style as StyleIcon,
  Category as CategoryIcon,
  Language as LanguageIcon,
  Description as DescriptionIcon,
  Dashboard as DashboardIcon,
  Insights as InsightsIcon,
  AddCircle as AddCircleIcon,
} from '@mui/icons-material';

const ResultsConfirmationStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { state } = useOnboarding();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box sx={onboardingContainerStyles}>
      <Box sx={onboardingContentStyles}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {/* Company Profile */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants}>
                <Paper sx={{
                  ...paperStyles,
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(17, 25, 40, 0.9), rgba(17, 25, 40, 0.8))',
                }}>
                  <Typography variant="h5" sx={{ 
                    color: '#fff',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <BusinessIcon sx={{ color: '#0EA5E9' }} />
                    Company Profile
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle2" sx={{ color: '#0EA5E9', mb: 1 }}>
                      <CategoryIcon sx={{ fontSize: '1rem', mr: 1, verticalAlign: 'text-bottom' }} />
                      Industry
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                      {state.company.industry}
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle2" sx={{ color: '#0EA5E9', mb: 1 }}>
                      <DescriptionIcon sx={{ fontSize: '1rem', mr: 1, verticalAlign: 'text-bottom' }} />
                      Description
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                      {state.company.description}
                    </Typography>
                  </Box>

                  {state.company.website && (
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle2" sx={{ color: '#0EA5E9', mb: 1 }}>
                        <LanguageIcon sx={{ fontSize: '1rem', mr: 1, verticalAlign: 'text-bottom' }} />
                        Website
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#fff' }}>
                        {state.company.website}
                      </Typography>
                    </Box>
                  )}

                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#0EA5E9', mb: 2 }}>
                      <StyleIcon sx={{ fontSize: '1rem', mr: 1, verticalAlign: 'text-bottom' }} />
                      Brand Identity
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box sx={{ 
                          p: 2, 
                          borderRadius: 1,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        }}>
                          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Primary Color
                          </Typography>
                          <Box sx={{ 
                            mt: 1,
                            height: '24px',
                            borderRadius: 0.5,
                            backgroundColor: '#0EA5E9',
                          }} />
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box sx={{ 
                          p: 2, 
                          borderRadius: 1,
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        }}>
                          <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                            Secondary Color
                          </Typography>
                          <Box sx={{ 
                            mt: 1,
                            height: '24px',
                            borderRadius: 0.5,
                            backgroundColor: '#3B82F6',
                          }} />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Next Steps */}
            <Grid item xs={12} md={5}>
              <motion.div variants={itemVariants}>
                <Paper sx={{
                  ...paperStyles,
                  p: 3,
                  background: 'linear-gradient(135deg, rgba(17, 25, 40, 0.9), rgba(17, 25, 40, 0.8))',
                }}>
                  <Typography variant="h5" sx={{ 
                    color: '#fff',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}>
                    <InsightsIcon sx={{ color: '#0EA5E9' }} />
                    Next Steps
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ color: '#fff', mb: 3 }}>
                      Your company profile has been created. You can now:
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<DashboardIcon />}
                        sx={{
                          color: '#fff',
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          p: 2,
                          '&:hover': {
                            borderColor: '#0EA5E9',
                            backgroundColor: 'rgba(14, 165, 233, 0.1)',
                          },
                        }}
                      >
                        Explore your personalized dashboard
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={<AddCircleIcon />}
                        sx={{
                          color: '#fff',
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          p: 2,
                          '&:hover': {
                            borderColor: '#0EA5E9',
                            backgroundColor: 'rgba(14, 165, 233, 0.1)',
                          },
                        }}
                      >
                        Start creating your first project
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={<InsightsIcon />}
                        sx={{
                          color: '#fff',
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                          justifyContent: 'flex-start',
                          textAlign: 'left',
                          p: 2,
                          '&:hover': {
                            borderColor: '#0EA5E9',
                            backgroundColor: 'rgba(14, 165, 233, 0.1)',
                          },
                        }}
                      >
                        Review AI-powered insights
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <StepNavigation
              onNext={onNext}
              onBack={onBack}
              nextLabel="Go to Dashboard"
              backLabel="Back"
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ResultsConfirmationStep;
