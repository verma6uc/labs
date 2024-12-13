import { SxProps, Theme, keyframes } from '@mui/material';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(14, 165, 233, 0.2), 0 0 10px rgba(14, 165, 233, 0.2), 0 0 15px rgba(14, 165, 233, 0.2); }
  50% { box-shadow: 0 0 10px rgba(14, 165, 233, 0.3), 0 0 20px rgba(14, 165, 233, 0.3), 0 0 30px rgba(14, 165, 233, 0.3); }
  100% { box-shadow: 0 0 5px rgba(14, 165, 233, 0.2), 0 0 10px rgba(14, 165, 233, 0.2), 0 0 15px rgba(14, 165, 233, 0.2); }
`;

const nebulaAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const onboardingContainerStyles: SxProps<Theme> = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  p: { xs: 2, sm: 3, md: 4 },
};

export const onboardingContentStyles: SxProps<Theme> = {
  width: '100%',
  maxWidth: '1200px',
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  flex: 1,
};

export const stepIndicatorStyles: SxProps<Theme> = {
  backgroundColor: 'rgba(17, 25, 40, 0.8)',
  backdropFilter: 'blur(20px)',
  borderRadius: 2,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  p: 1.5,
  mb: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  height: '60px',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.05), rgba(56, 189, 248, 0.05))',
    filter: 'blur(10px)',
    opacity: 0.5,
    borderRadius: 2,
  },
};

export const paperStyles: SxProps<Theme> = {
  backgroundColor: 'rgba(17, 25, 40, 0.8)',
  backdropFilter: 'blur(20px)',
  borderRadius: 2,
  border: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  maxHeight: '400px',
  minHeight: '300px',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  animation: `${glowAnimation} 3s infinite ease-in-out`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(14, 165, 233, 0.05), rgba(56, 189, 248, 0.05))',
    filter: 'blur(10px)',
    opacity: 0.5,
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    borderColor: 'rgba(14, 165, 233, 0.3)',
    boxShadow: '0 0 30px rgba(14, 165, 233, 0.1)',
    '&::before': {
      opacity: 0.7,
    },
  },
};

export const loadingNebulaStyles: SxProps<Theme> = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(-45deg, #0f172a, #1e293b, #0ea5e9, #3b82f6)',
  backgroundSize: '400% 400%',
  animation: `${nebulaAnimation} 15s ease infinite`,
  opacity: 0.8,
  zIndex: -1,
};

export const textFieldStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    backgroundColor: 'rgba(17, 25, 40, 0.6)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0EA5E9',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-focused': {
      color: '#0EA5E9',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#ef4444',
  },
};

export const sectionHeaderStyles: SxProps<Theme> = {
  p: 2,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'rgba(17, 25, 40, 0.9)',
  backdropFilter: 'blur(20px)',
  position: 'relative',
  zIndex: 1,
};

export const sectionTitleStyles: SxProps<Theme> = {
  color: '#fff',
  fontWeight: 600,
  fontSize: { xs: '1.1rem', sm: '1.25rem' },
};

export const sectionContentStyles: SxProps<Theme> = {
  p: 2,
  flex: 1,
  overflowY: 'auto',
  position: 'relative',
  zIndex: 1,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255, 255, 255, 0.05)',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba(255, 255, 255, 0.3)',
  },
};

export const navigationContainerStyles: SxProps<Theme> = {
  p: 2,
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  backgroundColor: 'rgba(17, 25, 40, 0.9)',
  backdropFilter: 'blur(20px)',
  position: 'sticky',
  bottom: 0,
  zIndex: 1,
};

export const buttonStyles = {
  primary: {
    backgroundColor: '#0EA5E9',
    color: '#fff',
    px: 3,
    py: 1,
    minWidth: 100,
    height: '40px',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#0284C7',
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(14, 165, 233, 0.3)',
    },
    '&.Mui-disabled': {
      backgroundColor: 'rgba(14, 165, 233, 0.3)',
      color: 'rgba(255, 255, 255, 0.3)',
    },
  },
  secondary: {
    color: 'rgba(255, 255, 255, 0.7)',
    px: 2,
    py: 1,
    minWidth: 100,
    height: '40px',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-2px)',
    },
  },
};

export const formFieldStyles: SxProps<Theme> = {
  mb: 2,
  '& .MuiFormLabel-root': {
    fontSize: '0.9rem',
    color: '#0EA5E9',
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
};

export const emptyStateStyles: SxProps<Theme> = {
  textAlign: 'center',
  py: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.02)',
  borderRadius: 2,
  border: '1px dashed rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderColor: 'rgba(14, 165, 233, 0.2)',
  },
};
