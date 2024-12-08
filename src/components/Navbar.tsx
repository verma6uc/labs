import { AppBar, Toolbar, Typography, Button, Box, styled, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import BeakerIcon from './BeakerIcon';

const NavButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '6px 12px',
  '&:hover': {
    color: '#0EA5E9',
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  color: '#0EA5E9',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '8px 20px',
  borderRadius: 0,
  border: '1px solid #0EA5E9',
  '&:hover': {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    transform: 'translateY(-2px)',
  },
}));

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Toolbar 
          sx={{ 
            py: 1.5, 
            px: '0 !important',
            minHeight: { xs: '64px', md: '72px' },
          }}
        >
          <Typography 
            component={RouterLink} 
            to="/" 
            sx={{ 
              textDecoration: 'none', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              flexGrow: { xs: 1, md: 0 },
              mr: { md: 8 },
              fontSize: { xs: '1.125rem', md: '1.25rem' },
              fontWeight: 600,
              '&:hover': {
                color: '#0EA5E9',
              },
            }}
          >
            <BeakerIcon sx={{ color: '#0EA5E9', fontSize: { xs: 22, md: 24 } }} />
            Creator Labs
          </Typography>
          
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' }, 
            alignItems: 'center',
            gap: 2,
            flexGrow: 1,
          }}>
            <NavButton component={RouterLink} to="/">
              Home
            </NavButton>
            <NavButton component={RouterLink} to="/features">
              Features
            </NavButton>
            <NavButton component={RouterLink} to="/solutions">
              Solutions
            </NavButton>
            <NavButton component={RouterLink} to="/agents">
              Agents
            </NavButton>
            <NavButton component={RouterLink} to="/journey">
              Journey
            </NavButton>
          </Box>

          <LoginButton 
            component={RouterLink} 
            to="/auth/login"
            variant="contained"
            disableElevation
          >
            Login
          </LoginButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
