import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { Error as ErrorIcon } from '@mui/icons-material';

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage = 'An unexpected error occurred';
  let statusText = 'Error';
  let status = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
    statusText = error.statusText;
    status = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          gap: 2,
        }}
      >
        <ErrorIcon sx={{ fontSize: 64, color: 'error.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          {status} - {statusText}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {errorMessage}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
            sx={{ mr: 2 }}
          >
            Go to Dashboard
          </Button>
          <Button
            variant="outlined"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorBoundary;
