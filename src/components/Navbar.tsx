import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { GlassButton } from './shared/StyledComponents';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)');

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Features', path: '/features' },
    { text: 'Solutions', path: '/solutions' },
    { text: 'Journey', path: '/journey' },
    { text: 'Agents', path: '/agents' },
    { text: 'Pricing', path: '/pricing' },
    { text: 'Contact', path: '/contact' },
  ];

  const renderMobileMenu = () => (
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
          padding: '1rem',
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton
          onClick={() => setMobileMenuOpen(false)}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {navItems.map((item) => (
          <GlassButton
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            fullWidth
            sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
          >
            {item.text}
          </GlassButton>
        ))}
        <Box sx={{ mt: 2 }}>
          <GlassButton
            component={RouterLink}
            to="/auth/login"
            onClick={() => setMobileMenuOpen(false)}
            fullWidth
            sx={{ mb: 1 }}
          >
            Login
          </GlassButton>
          <GlassButton
            component={RouterLink}
            to="/auth/signup"
            className="primary"
            fullWidth
          >
            Sign Up
          </GlassButton>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(17, 24, 39, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <h6 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
              Creator Labs
            </h6>
          </Box>
        </RouterLink>

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <GlassButton
                key={item.text}
                component={RouterLink}
                to={item.path}
              >
                {item.text}
              </GlassButton>
            ))}
            <Box sx={{ ml: 2 }}>
              <GlassButton
                component={RouterLink}
                to="/auth/login"
                sx={{ mr: 1 }}
              >
                Login
              </GlassButton>
              <GlassButton
                component={RouterLink}
                to="/auth/signup"
                className="primary"
              >
                Sign Up
              </GlassButton>
            </Box>
          </Box>
        )}
        {renderMobileMenu()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
