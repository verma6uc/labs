import React from 'react';
import { Outlet, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useTheme as useThemeContext } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';
import Logo from '../components/Logo';

const MainLayout = () => {
  const theme = useTheme();
  const { mode } = useThemeContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState<null | HTMLElement>(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Features', path: '/features' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Journey', path: '/journey' },
    { label: 'Agents', path: '/agents' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground variant="sparse" />
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(8px)',
          background: (theme) => 
            theme.palette.mode === 'dark' 
              ? 'rgba(22, 28, 36, 0.94)'
              : 'rgba(255, 255, 255, 0.9)',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', height: 64, px: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open menu"
                  edge="start"
                  onClick={handleMobileMenuOpen}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Logo />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    color: '#0EA5E9',
                    letterSpacing: '0.02em',
                    background: 'linear-gradient(90deg, #0EA5E9 0%, #6366F1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textTransform: 'uppercase',
                  }}
                >
                  Creator Labs
                </Typography>
              </Box>
            </Box>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: (theme) => theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                      fontSize: '0.875rem',
                      textTransform: 'none',
                      px: 2,
                      '&:hover': {
                        color: '#0EA5E9',
                        background: (theme) => 
                          theme.palette.mode === 'dark'
                            ? 'rgba(14, 165, 233, 0.1)'
                            : 'rgba(14, 165, 233, 0.08)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {!isMobile && (
                <>
                  <Button
                    component={RouterLink}
                    to="/auth/login"
                    variant="outlined"
                    size="small"
                    sx={{
                      color: '#0EA5E9',
                      borderColor: '#0EA5E9',
                      textTransform: 'none',
                      px: 3,
                      '&:hover': {
                        borderColor: '#0284C7',
                        backgroundColor: 'rgba(14, 165, 233, 0.08)',
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/auth/signup"
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#0EA5E9',
                      textTransform: 'none',
                      px: 3,
                      '&:hover': {
                        backgroundColor: '#0284C7',
                      },
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Menu
        anchorEl={mobileMenuAnchorEl}
        open={Boolean(mobileMenuAnchorEl)}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: 300,
            mt: 1.5,
            background: (theme) => 
              theme.palette.mode === 'dark'
                ? 'rgba(22, 28, 36, 0.94)'
                : 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid',
            borderColor: 'divider',
          },
        }}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            onClick={handleMobileMenuClose}
            component={RouterLink}
            to={item.path}
            sx={{
              color: (theme) => theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
              '&:hover': {
                backgroundColor: (theme) => 
                  theme.palette.mode === 'dark'
                    ? 'rgba(14, 165, 233, 0.1)'
                    : 'rgba(14, 165, 233, 0.08)',
                color: '#0EA5E9',
              },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        <Box sx={{ px: 2, py: 1 }}>
          <Button
            component={RouterLink}
            to="/auth/login"
            fullWidth
            variant="outlined"
            sx={{
              mb: 1,
              color: '#0EA5E9',
              borderColor: '#0EA5E9',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#0284C7',
                backgroundColor: 'rgba(14, 165, 233, 0.08)',
              },
            }}
          >
            Login
          </Button>
          <Button
            component={RouterLink}
            to="/auth/signup"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#0EA5E9',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#0284C7',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Menu>

      <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
