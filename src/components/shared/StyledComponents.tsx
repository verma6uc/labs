import { styled } from '@mui/material/styles';
import { Button, Card, TextField } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '8px 20px',
  borderRadius: '6px',
  transition: 'all 0.2s ease-in-out',
  '&.MuiButton-contained': {
    backgroundColor: '#0EA5E9',
    color: '#fff',
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: '#0284C7',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(14, 165, 233, 0.25)',
    },
  },
  '&.MuiButton-outlined': {
    backgroundColor: 'transparent',
    borderColor: '#0EA5E9',
    color: '#0EA5E9',
    '&:hover': {
      backgroundColor: 'rgba(14, 165, 233, 0.08)',
      borderColor: '#0EA5E9',
      transform: 'translateY(-1px)',
    },
  },
  '& .MuiButton-startIcon': {
    marginRight: '8px',
    '& svg': {
      fontSize: '20px',
    },
  },
  '&.icon': {
    minWidth: '36px',
    width: '36px',
    height: '36px',
    padding: '8px',
    '& .MuiButton-startIcon': {
      margin: 0,
    },
  },
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(16px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  borderRadius: '12px',
  padding: theme.spacing(3),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

export const StyledSearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    backdropFilter: 'blur(16px) saturate(180%)',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.125)',
    },
    '&:hover fieldset': {
      borderColor: '#0EA5E9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0EA5E9',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#fff',
    fontSize: '0.875rem',
    '&::placeholder': {
      color: '#94A3B8',
      opacity: 1,
    },
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(17, 25, 40, 0.75)',
    color: '#E2E8F0',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.125)',
      transition: 'all 0.2s ease-in-out',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(14, 165, 233, 0.5)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0EA5E9',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#94A3B8',
    '&.Mui-focused': {
      color: '#0EA5E9',
    },
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      color: '#64748B',
      opacity: 1,
    },
  },
}));
