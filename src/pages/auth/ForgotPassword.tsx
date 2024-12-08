import React, { useState } from 'react';
import {
  Typography,
  Container,
  Link,
  Box,
  Alert,
  TextField,
  Button,
} from '@mui/material';
import BeakerIcon from '../../components/BeakerIcon';
import { Input as StyledTextField, Button as AuthButton } from '../../components/auth/AuthStyles';
import AuthLayout from '../../components/auth/AuthLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send password reset email');
      }

      setSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Box
        sx={{
          textAlign: 'center',
          mb: 4,
        }}
      >
        <BeakerIcon sx={{ color: '#0EA5E9', fontSize: 48, mb: 2 }} />
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 1,
            color: '#fff',
          }}
        >
          Forgot Password
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            mb: 4,
          }}
        >
          Enter your email and we'll send you a reset link
        </Typography>
      </Box>

      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            color: '#EF4444',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            '& .MuiAlert-icon': {
              color: '#EF4444',
            },
          }}
        >
          {error}
        </Alert>
      )}

      {success ? (
        <Alert
          severity="success"
          sx={{
            mb: 3,
            backgroundColor: 'rgba(34, 197, 94, 0.1)',
            color: '#22C55E',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            '& .MuiAlert-icon': {
              color: '#22C55E',
            },
          }}
        >
          Check your email for a reset link
        </Alert>
      ) : (
        <Container component="form" onSubmit={handleSubmit}>
          <StyledTextField
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            autoComplete="email"
            autoFocus
            variant="filled"
          />

          <AuthButton
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3 }}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </AuthButton>

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Remember your password?{' '}
              <Link
                component={RouterLink}
                to="/auth/login"
                sx={{
                  color: '#0EA5E9',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>
        </Container>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;
