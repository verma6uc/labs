import { AppBar, Toolbar, Typography, Button, Box, styled, Container, IconButton, Drawer } from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Home as HomeIcon,
  Lightbulb as FeaturesIcon,
  Business as SolutionsIcon,
  SmartToy as AgentsIcon,
  Timeline as JourneyIcon,
  Login as LoginIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import BeakerIcon from './BeakerIcon';
import { useState } from 'react';

const NavButton = styled(Button)({
  color: '#FFFFFF',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '8px 16px',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    color: '#0EA5E9',
    backgroundColor: 'rgba(14, 165, 233, 0.08)',
  },
});

const LoginButton = styled(Button)({
  backgroundColor: 'rgba(14, 165, 233, 0.1)',
  color: '#0EA5E9',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontWeight: 500,
  padding: '8px 20px',
  borderRadius: '50px',
  border: '1px solid #0EA5E9',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'rgba(14, 165, 233, 0.2)',
    transform: 'translateY(-2px)',
  },
});

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          
          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              color: 'white',
              mr: 1
            }}
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Login Button - Hide on mobile */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <LoginButton 
              component={RouterLink} 
              to="/auth/login"
              variant="contained"
              disableElevation
              startIcon={<LoginIcon />}
            >
              Login
            </LoginButton>
          </Box>

          {/* Mobile Menu Drawer */}
          <Drawer
            anchor="right"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: '300px',
                backgroundColor: 'rgba(17, 24, 39, 0.98)',
                backdropFilter: 'blur(10px)',
                borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'none',
              }
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <IconButton
                  onClick={() => setMobileMenuOpen(false)}
                  sx={{ color: 'white' }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <NavButton 
                  component={RouterLink} 
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<HomeIcon />}
                >
                  Home
                </NavButton>
                <NavButton 
                  component={RouterLink} 
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<FeaturesIcon />}
                >
                  Features
                </NavButton>
                <NavButton 
                  component={RouterLink} 
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<SolutionsIcon />}
                >
                  Solutions
                </NavButton>
                <NavButton 
                  component={RouterLink} 
                  to="/agents"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<AgentsIcon />}
                >
                  Agents
                </NavButton>
                <NavButton 
                  component={RouterLink} 
                  to="/journey"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<JourneyIcon />}
                >
                  Journey
                </NavButton>
                {/* Login Button in Mobile Menu */}
                <LoginButton 
                  component={RouterLink} 
                  to="/auth/login"
                  variant="contained"
                  disableElevation
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  startIcon={<LoginIcon />}
                  sx={{ mt: 2 }}
                >
                  Login
                </LoginButton>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
