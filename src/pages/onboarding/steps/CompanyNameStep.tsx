import React, { useState } from 'react';
import { Box, TextField, Typography, Paper, Button } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import StepNavigation from '../components/StepNavigation';
import { StepProps } from '../types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  onboardingContainerStyles,
  onboardingContentStyles,
  paperStyles,
  textFieldStyles,
  sectionContentStyles,
  navigationContainerStyles
} from '../styles/OnboardingStyles';

const CompanyNameStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { state, dispatch } = useOnboarding();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setError('');
    dispatch({ 
      type: 'UPDATE_COMPANY', 
      payload: { name: value } 
    });
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    
    if (!state.company.name?.trim()) {
      setError('Company name is required');
      return;
    }
    
    onNext();
  };

  const handleBack = () => {
    navigate('/');
  };

  const containerVariants = {
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
          style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
        >
          <Paper
            elevation={0}
            sx={{
              ...paperStyles,
              maxWidth: '600px',
              mx: 'auto',
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
              minHeight: '300px',
            }}
          >
            <Box 
              component="form"
              onSubmit={handleSubmit}
              sx={{
                ...sectionContentStyles,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                py: 4,
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h4" 
                  component="h1" 
                  sx={{ 
                    color: '#fff',
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    fontWeight: 600,
                    mb: 1,
                  }}
                >
                  Welcome to Creator Labs
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                >
                  Let's start by getting to know your company
                </Typography>
              </Box>

              <Box sx={{ width: '100%', maxWidth: '400px' }}>
                <TextField
                  fullWidth
                  label="Company Name"
                  value={state.company.name || ''}
                  onChange={handleChange}
                  error={!!error}
                  helperText={error}
                  sx={textFieldStyles}
                  autoFocus
                />
                {/* Hidden submit button to handle Enter key */}
                <Button 
                  type="submit"
                  sx={{ 
                    position: 'absolute',
                    width: 0,
                    height: 0,
                    padding: 0,
                    overflow: 'hidden',
                    border: 0,
                    visibility: 'hidden'
                  }}
                />
              </Box>
            </Box>

            <Box sx={navigationContainerStyles}>
              <StepNavigation
                onNext={handleSubmit}
                onBack={handleBack}
                showBack={true}
                isNextDisabled={!state.company.name?.trim()}
                nextLabel="Next"
                backLabel="Back to Home"
              />
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </Box>
  );
};

export default CompanyNameStep;
