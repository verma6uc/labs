import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import { FormContainer, Form, Input, Button, InputWrapper, PasswordInput, EyeIcon } from '../../components/auth/AuthStyles';

const EyeIconSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const EyeOffIconSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 2 12 2 12C3.24389 9.68192 4.96914 7.65663 7.06 6.06M9.9 4.24C10.5883 4.0789 11.2931 3.99836 12 4C19 4 22 12 22 12C21.393 13.1356 20.6691 14.2048 19.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 3L21 21" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    // Mock credentials for the prototype
    const validCredentials = {
      email: 'admin@creatorlabs.com',
      password: 'admin123'
    };

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (email === validCredentials.email && password === validCredentials.password) {
        // Store mock token
        localStorage.setItem('token', 'mock-jwt-token');
        localStorage.setItem('user', JSON.stringify({
          id: 'admin-001',
          name: 'John Admin',
          email: validCredentials.email,
          role: 'SUPERADMIN'
        }));
        navigate('/admin');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <FormContainer>
        <h1 style={{ 
          color: '#fff', 
          fontSize: '24px', 
          fontWeight: 600,
          marginBottom: '8px',
          textAlign: 'center' 
        }}>
          Welcome back
        </h1>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.7)', 
          fontSize: '14px',
          marginBottom: '32px',
          textAlign: 'center' 
        }}>
          Sign in to continue to Creator Labs
        </p>

        {error && (
          <p style={{ 
            color: '#EF4444', 
            fontSize: '14px',
            marginBottom: '16px',
            textAlign: 'center' 
          }}>
            {error}
          </p>
        )}

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <InputWrapper>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <EyeIcon
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOffIconSvg /> : <EyeIconSvg />}
            </EyeIcon>
          </InputWrapper>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end',
            marginBottom: '16px' 
          }}>
            <RouterLink 
              to="/auth/forgot-password"
              style={{ 
                color: '#0EA5E9', 
                textDecoration: 'none',
                fontSize: '14px',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Forgot password?
            </RouterLink>
          </div>

          <Button type="submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>

          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            textAlign: 'center',
            marginTop: '24px' 
          }}>
            Don't have an account?{' '}
            <RouterLink 
              to="/auth/signup"
              style={{ 
                color: '#0EA5E9', 
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Sign up
            </RouterLink>
          </p>
        </Form>
      </FormContainer>
    </AuthLayout>
  );
};

export default Login;
