import { styled } from '@mui/material/styles';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Input = styled('input')({
  width: '100%',
  height: '44px',
  backgroundColor: 'rgba(226, 232, 240, 0.06)',
  border: 'none',
  borderRadius: '8px',
  padding: '12px 16px',
  color: '#fff',
  fontSize: '14px',
  outline: 'none',
  '&:hover': {
    backgroundColor: 'rgba(226, 232, 240, 0.08)',
  },
  '&:focus': {
    backgroundColor: 'rgba(226, 232, 240, 0.08)',
  },
  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  marginBottom: '20px',
});

export const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  height: '44px',
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  border: '1px solid #0EA5E9',
  borderRadius: 0,
  color: '#0EA5E9',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    backgroundColor: 'rgba(14, 165, 233, 0.05)',
    borderColor: 'rgba(14, 165, 233, 0.3)',
    color: 'rgba(14, 165, 233, 0.5)',
    cursor: 'not-allowed',
    transform: 'none',
  },
}));

export const FormContainer = styled('div')({
  backgroundColor: 'rgba(15, 23, 42, 0.8)',
  backdropFilter: 'blur(16px)',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '32px',
  width: '100%',
  maxWidth: '400px',
  margin: '0 auto',
});

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  width: '100%',
});

export const InputWrapper = styled('div')({
  position: 'relative',
  width: '100%',
});

export const PasswordInput = styled(Input)({
  paddingRight: '40px', // Space for the eye icon
});

export const EyeIcon = styled('button')({
  position: 'absolute',
  right: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  padding: '4px',
  cursor: 'pointer',
  color: 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
