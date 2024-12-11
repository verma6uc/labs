import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { GlassButton } from './shared/StyledComponents';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = true; // Always force mobile view for testing

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
          boxShadow: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 2,
        }
      }}
    >
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton
          onClick={() => setMobileMenuOpen(false)}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ p: 2 }}>
        {navItems.map((item) => (
          <GlassButton
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className="secondary"
            fullWidth
            sx={{ justifyContent: 'flex-start', textAlign: 'left' }}
          >
            {item.text}
          </GlassButton>
        ))}
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <GlassButton
            component={RouterLink}
            to="/auth/login"
            onClick={() => setMobileMenuOpen(false)}
            className="secondary"
            fullWidth
          >
            Login
          </GlassButton>
          <GlassButton
            component={RouterLink}
            to="/auth/signup"
            onClick={() => setMobileMenuOpen(false)}
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
          <GlassButton
            aria-label="menu"
            className="secondary"
            sx={{
              display: { xs: 'flex', md: 'none' },
              minWidth: 'unset',
              p: 1
            }}
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </GlassButton>
        )}

        {/* Mobile Menu */}
        {renderMobileMenu()}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
