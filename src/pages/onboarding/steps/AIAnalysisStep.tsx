import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress, Paper } from '@mui/material';
import { useOnboarding } from '../context/OnboardingContext';
import StepNavigation from '../components/StepNavigation';
import { StepProps } from '../types';
import { motion } from 'framer-motion';
import {
  onboardingContainerStyles,
  onboardingContentStyles,
  paperStyles,
  loadingNebulaStyles,
} from '../styles/OnboardingStyles';
import { Analytics as AnalyticsIcon } from '@mui/icons-material';

const AIAnalysisStep: React.FC<StepProps> = ({ onNext, onBack }) => {
  const { state, dispatch } = useOnboarding();
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Analyzing company profile...');

  const tasks = [
    'Analyzing company profile...',
    'Identifying brand patterns...',
    'Generating color recommendations...',
    'Creating UI/UX archetypes...',
    'Finalizing analysis...',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = Math.min(oldProgress + 1, 100);
        
        // Update task based on progress
        const taskIndex = Math.floor((newProgress / 100) * tasks.length);
        if (taskIndex < tasks.length) {
          setCurrentTask(tasks[taskIndex]);
        }

        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => {
            onNext();
          }, 500);
        }
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [onNext]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Box sx={onboardingContainerStyles}>
      {/* Nebula Background */}
      <Box sx={loadingNebulaStyles} />

      <Box sx={onboardingContentStyles}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              ...paperStyles,
              p: 4,
              background: 'rgba(17, 25, 40, 0.7)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
              }}
            >
              <AnalyticsIcon
                sx={{
                  fontSize: 40,
                  color: '#0EA5E9',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%': {
                      transform: 'scale(1)',
                      opacity: 1,
                    },
                    '50%': {
                      transform: 'scale(1.1)',
                      opacity: 0.7,
                    },
                    '100%': {
                      transform: 'scale(1)',
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>

            <Typography
              variant="h4"
              sx={{
                color: '#fff',
                fontWeight: 600,
                textShadow: '0 0 10px rgba(14, 165, 233, 0.3)',
              }}
            >
              AI Analysis in Progress
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                mb: 4,
                maxWidth: '400px',
                textShadow: '0 0 10px rgba(14, 165, 233, 0.2)',
              }}
            >
              We're analyzing your company information to provide personalized recommendations
            </Typography>

            <Box sx={{ width: '100%', mb: 2 }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    background: 'linear-gradient(90deg, #0EA5E9, #3B82F6)',
                    boxShadow: '0 0 10px rgba(14, 165, 233, 0.5)',
                  },
                }}
              />
            </Box>

            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontStyle: 'italic',
                minHeight: '24px',
                textShadow: '0 0 10px rgba(14, 165, 233, 0.2)',
              }}
            >
              {currentTask}
            </Typography>
          </Paper>

          <Box sx={{ mt: 3 }}>
            <StepNavigation
              onNext={onNext}
              onBack={onBack}
              isNextDisabled={true}
              isLoading={true}
            />
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default AIAnalysisStep;
