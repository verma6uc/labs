import React, { useState } from 'react';
import { Box, Typography, Button, Stack, CircularProgress } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import StepNavigation from '../components/StepNavigation';
import { StepProps } from '../types';

const CompanyCheckStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { state, dispatch } = useOnboarding();
  const [isLoading, setIsLoading] = useState(false);

  const fetchCompanyData = async () => {
    try {
      setIsLoading(true);
      // Simulating API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock company data based on company name
      const mockData = {
        website: `https://www.${state.company.name.toLowerCase().replace(/\s+/g, '')}.com`,
        industry: state.company.name.includes('Tech') ? 'Technology' : 
                 state.company.name.includes('Food') ? 'Food & Beverage' : 
                 'Software & Services',
        description: `${state.company.name} is a leading company focused on delivering innovative solutions to businesses worldwide.`
      };

      dispatch({
        type: 'UPDATE_COMPANY',
        payload: mockData
      });

      setIsLoading(false);
      onNext();
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching company data:', error);
    }
  };

  const handleExistingCompany = async (isExisting: boolean) => {
    dispatch({ type: 'SET_EXISTING_COMPANY', payload: isExisting });
    if (isExisting) {
      await fetchCompanyData();
    } else {
      onNext();
    }
  };

  if (isLoading) {
    return (
      <Box sx={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
      }}>
        <CircularProgress size={60} sx={{ color: '#0EA5E9' }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>
          Fetching company information...
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
      <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center', color: '#fff' }}>
        Tell us about {state.company.name}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
        Is this an existing company with a website and brand identity?
      </Typography>

      <Stack spacing={2} sx={{ mb: 4 }}>
        <Button
          variant="outlined"
          onClick={() => handleExistingCompany(true)}
          sx={{
            color: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.23)',
            '&:hover': {
              borderColor: '#0EA5E9',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
            },
            py: 2,
          }}
        >
          Yes, we have a website and brand identity
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleExistingCompany(false)}
          sx={{
            color: '#fff',
            borderColor: 'rgba(255, 255, 255, 0.23)',
            '&:hover': {
              borderColor: '#0EA5E9',
              backgroundColor: 'rgba(14, 165, 233, 0.1)',
            },
            py: 2,
          }}
        >
          No, we're just getting started
        </Button>
      </Stack>

      <StepNavigation
        onNext={() => {}}
        onBack={onBack}
        showBack={true}
        isNextDisabled={true}
      />
    </Box>
  );
};

export default CompanyCheckStep; 