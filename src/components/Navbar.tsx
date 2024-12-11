import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
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
import BeakerIcon from './BeakerIcon';
import { GlassButton } from './shared/StyledComponents';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:960px)');

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(2, 6, 23, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
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
            <GlassButton component={RouterLink} to="/" className="secondary">
              Home
            </GlassButton>
            <GlassButton component={RouterLink} to="/features" className="secondary">
              Features
            </GlassButton>
            <GlassButton component={RouterLink} to="/solutions" className="secondary">
              Solutions
            </GlassButton>
            <GlassButton component={RouterLink} to="/agents" className="secondary">
              Agents
            </GlassButton>
            <GlassButton component={RouterLink} to="/journey" className="secondary">
              Journey
            </GlassButton>
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
            <GlassButton
              component={RouterLink}
              to="/auth/login"
              className="primary"
              startIcon={<LoginIcon />}
            >
              Login
            </GlassButton>
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
                <GlassButton
                  component={RouterLink}
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="secondary"
                  startIcon={<HomeIcon />}
                >
                  Home
                </GlassButton>
                <GlassButton
                  component={RouterLink}
                  to="/features"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="secondary"
                  startIcon={<FeaturesIcon />}
                >
                  Features
                </GlassButton>
                <GlassButton
                  component={RouterLink}
                  to="/solutions"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="secondary"
                  startIcon={<SolutionsIcon />}
                >
                  Solutions
                </GlassButton>
                <GlassButton
                  component={RouterLink}
                  to="/agents"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="secondary"
                  startIcon={<AgentsIcon />}
                >
                  Agents
                </GlassButton>
                <GlassButton
                  component={RouterLink}
                  to="/journey"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="secondary"
                  startIcon={<JourneyIcon />}
                >
                  Journey
                </GlassButton>
                <GlassButton
                  component={RouterLink}
                  to="/auth/login"
                  onClick={() => setMobileMenuOpen(false)}
                  fullWidth
                  className="primary"
                  startIcon={<LoginIcon />}
                  sx={{ mt: 2 }}
                >
                  Login
                </GlassButton>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
