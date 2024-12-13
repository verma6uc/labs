import React, { useEffect } from 'react';
import { OnboardingProvider, useOnboarding } from './context/OnboardingContext';
import OnboardingLayout from './components/OnboardingLayout';
import ProgressBar from './components/ProgressBar';
import CompanyNameStep from './steps/CompanyNameStep';
import CompanyCheckStep from './steps/CompanyCheckStep';
import CompanyDetailsStep from './steps/CompanyDetailsStep';
import AIAnalysisStep from './steps/AIAnalysisStep';
import ResultsConfirmationStep from './steps/ResultsConfirmationStep';
import { OnboardingStep } from './types';
import { Box } from '@mui/material';

const STEP_ORDER: OnboardingStep[] = [
  'company-name',
  'company-check',
  'company-details',
  'ai-analysis',
  'results-confirmation',
];

const StepComponents: { [K in OnboardingStep]: React.ComponentType<any> } = {
  'company-name': CompanyNameStep,
  'company-check': CompanyCheckStep,
  'company-details': CompanyDetailsStep,
  'ai-analysis': AIAnalysisStep,
  'results-confirmation': ResultsConfirmationStep,
};

const OnboardingFlowContent: React.FC = () => {
  const { state, dispatch } = useOnboarding();
  const currentStepIndex = STEP_ORDER.indexOf(state.currentStep);
  const CurrentStepComponent = StepComponents[state.currentStep];

  useEffect(() => {
    console.log('OnboardingFlow rendered:', { 
      currentStep: state.currentStep,
      currentStepIndex,
      company: state.company 
    });
  }, [state.currentStep, state.company, currentStepIndex]);

  const handleNext = () => {
    console.log('handleNext called, current step:', state.currentStep);
    const nextStep = STEP_ORDER[currentStepIndex + 1];
    if (nextStep) {
      console.log('Moving to next step:', nextStep);
      dispatch({ type: 'SET_STEP', payload: nextStep });
    } else {
      console.log('No next step available');
    }
  };

  const handleBack = () => {
    console.log('handleBack called, current step:', state.currentStep);
    const previousStep = STEP_ORDER[currentStepIndex - 1];
    if (previousStep) {
      console.log('Moving to previous step:', previousStep);
      dispatch({ type: 'SET_STEP', payload: previousStep });
    } else {
      console.log('No previous step available');
    }
  };

  return (
    <OnboardingLayout isLoading={state.currentStep === 'ai-analysis'}>
      <Box sx={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        px: { xs: 2, sm: 3, md: 4 },
        py: 2,
        backgroundColor: 'rgba(17, 25, 40, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
          <ProgressBar currentStep={state.currentStep} />
        </Box>
      </Box>
      <Box sx={{ mt: 8 }}>
        <CurrentStepComponent 
          onNext={handleNext}
          onBack={handleBack}
          isLoading={false}
        />
      </Box>
    </OnboardingLayout>
  );
};

const OnboardingFlow: React.FC = () => {
  return (
    <OnboardingProvider>
      <OnboardingFlowContent />
    </OnboardingProvider>
  );
};

export default OnboardingFlow;
