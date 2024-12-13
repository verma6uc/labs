import React from 'react';
import { Box, Typography } from '@mui/material';
import { OnboardingStep } from '../types';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: OnboardingStep;
}

const steps: { step: OnboardingStep; label: string }[] = [
  { step: 'company-name', label: 'Company Name' },
  { step: 'company-check', label: 'Verification' },
  { step: 'company-details', label: 'Details' },
  { step: 'ai-analysis', label: 'Analysis' },
  { step: 'results-confirmation', label: 'Confirmation' },
];

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const currentIndex = steps.findIndex(s => s.step === currentStep);

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
      {steps.map((step, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <React.Fragment key={step.step}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: isCurrent ? 1 : 0.8,
                  opacity: isCompleted || isCurrent ? 1 : 0.5,
                }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: isCompleted || isCurrent ? '#0EA5E9' : 'transparent',
                    border: '2px solid',
                    borderColor: isCompleted || isCurrent ? '#0EA5E9' : 'rgba(255, 255, 255, 0.23)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -2,
                      left: -2,
                      right: -2,
                      bottom: -2,
                      borderRadius: '50%',
                      background: isCompleted || isCurrent ? 'rgba(14, 165, 233, 0.2)' : 'transparent',
                      filter: 'blur(4px)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  {isCompleted ? '✓' : index + 1}
                </Box>
              </motion.div>
              <Typography
                variant="caption"
                sx={{
                  color: isCompleted || isCurrent ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                  mt: 1,
                  fontSize: '0.75rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {step.label}
              </Typography>
            </Box>
            {index < steps.length - 1 && (
              <Box
                sx={{
                  flex: 1,
                  height: 2,
                  backgroundColor: isCompleted ? '#0EA5E9' : 'rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -2,
                    left: 0,
                    right: 0,
                    bottom: -2,
                    background: isCompleted ? 'rgba(14, 165, 233, 0.2)' : 'transparent',
                    filter: 'blur(4px)',
                    transition: 'all 0.3s ease',
                  },
                }}
              />
            )}
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default ProgressBar;
