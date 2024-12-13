import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Paper, Button, TextField } from '@mui/material';
import { alpha } from '@mui/material';

export const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  textFillColor: 'transparent',
}));

export const GlassContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  backgroundColor: alpha(
    theme.palette.background.paper,
    theme.palette.mode === 'light' ? 0.9 : 0.8
  ),
  backdropFilter: 'blur(20px)',
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${alpha(
    theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white,
    0.1
  )}`,
  boxShadow: theme.palette.mode === 'light'
    ? '0 8px 32px rgba(0, 0, 0, 0.08)'
    : 'none',
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(12, 0),
  textAlign: 'center',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'light'
    ? alpha(theme.palette.primary.light, 0.05)
    : alpha(theme.palette.primary.dark, 0.2),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'light'
      ? 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1), rgba(255, 255, 255, 0) 70%)'
      : 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15), rgba(15, 23, 42, 0) 70%)',
  },
}));

export const FeatureCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  backgroundColor: alpha(
    theme.palette.background.paper,
    theme.palette.mode === 'light' ? 0.95 : 0.8
  ),
  border: `1px solid ${alpha(
    theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white,
    0.1
  )}`,
  boxShadow: theme.palette.mode === 'light'
    ? '0 4px 20px rgba(0, 0, 0, 0.08)'
    : 'none',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 12px 40px rgba(0, 0, 0, 0.12)'
      : '0 12px 40px rgba(0, 0, 0, 0.3)',
  },
}));

export const IconWrapper = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  background: theme.palette.mode === 'light'
    ? `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.primary.light, 0.1)})`
    : `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.2)}, ${alpha(theme.palette.primary.main, 0.2)})`,
  color: theme.palette.primary.main,
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -16,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 4,
    borderRadius: 2,
    background: theme.palette.mode === 'light'
      ? `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
      : `linear-gradient(90deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  padding: '8px 24px',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  '&.MuiButton-contained': {
    background: theme.palette.mode === 'light'
      ? 'linear-gradient(135deg, #1E40AF 0%, #0EA5E9 100%)'
      : 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
    color: '#FFFFFF',
    boxShadow: theme.palette.mode === 'light'
      ? '0 4px 14px 0 rgba(14, 165, 233, 0.25)'
      : '0 4px 14px 0 rgba(56, 189, 248, 0.25)',
    '&:hover': {
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(135deg, #1E40AF 0%, #0EA5E9 100%)'
        : 'linear-gradient(135deg, #38BDF8 0%, #818CF8 100%)',
      transform: 'translateY(-2px)',
      boxShadow: theme.palette.mode === 'light'
        ? '0 6px 20px 0 rgba(14, 165, 233, 0.35)'
        : '0 6px 20px 0 rgba(56, 189, 248, 0.35)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  '&.MuiButton-outlined': {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      borderColor: theme.palette.primary.main,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  '&.MuiButton-text': {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.08),
      transform: 'translateY(-2px)',
    },
    '&:active': {
      transform: 'translateY(0)',
    },
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.mode === 'light'
      ? alpha(theme.palette.primary.main, 0.12)
      : alpha(theme.palette.primary.main, 0.08),
    color: theme.palette.mode === 'light'
      ? alpha(theme.palette.primary.main, 0.38)
      : alpha(theme.palette.primary.main, 0.26),
  },
}));

export const GlassButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 500,
  textTransform: 'none',
  borderRadius: '12px',
  transition: 'all 0.3s ease-in-out',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#fff',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(99, 102, 241, 0.2))',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    border: '1px solid rgba(14, 165, 233, 0.5)',
    boxShadow: '0 8px 20px rgba(14, 165, 233, 0.15)',
    '&::before': {
      opacity: 1,
    }
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&.primary': {
    background: 'linear-gradient(135deg, #0EA5E9, #6366F1)',
    border: '1px solid rgba(14, 165, 233, 0.3)',
    '&:hover': {
      background: 'linear-gradient(135deg, #0284C7, #4F46E5)',
      border: '1px solid rgba(14, 165, 233, 0.6)',
      boxShadow: '0 8px 25px rgba(14, 165, 233, 0.25)',
    }
  },
  '&.secondary': {
    background: 'rgba(255, 255, 255, 0.03)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.05)',
    }
  }
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: alpha(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.9 : 0.8),
    borderRadius: '12px',
    transition: 'all 0.3s ease-in-out',
    '& fieldset': {
      borderColor: alpha(theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white, 0.1),
      transition: 'border-color 0.3s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: alpha(theme.palette.primary.main, 0.3),
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .MuiInputBase-input': {
    padding: '12px 16px',
  },
  '& .MuiInputAdornment-root': {
    color: theme.palette.text.secondary,
  },
}));

export const NotificationCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' 
    ? 'rgba(17, 25, 40, 0.75)' 
    : 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(16px) saturate(180%)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.125)' 
    : 'rgba(209, 213, 219, 0.3)'}`,
  borderRadius: '8px',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.5)'
      : '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '& .notification-title': {
    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
    fontWeight: 600,
    marginBottom: theme.spacing(0.5),
  },
  '& .notification-message': {
    color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
    fontSize: '0.875rem',
  },
  '& .notification-time': {
    color: theme.palette.mode === 'dark' ? '#64748B' : '#64748B',
    fontSize: '0.75rem',
    marginTop: theme.spacing(1),
  },
  '& .notification-icon': {
    marginRight: theme.spacing(1.5),
    color: ({ type }: { type: string }) => {
      switch (type) {
        case 'success':
          return '#10B981';
        case 'warning':
          return '#F59E0B';
        case 'error':
          return '#EF4444';
        default:
          return '#3B82F6';
      }
    },
  },
}));
