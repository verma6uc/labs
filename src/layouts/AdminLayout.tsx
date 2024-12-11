import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
  styled,
  Tooltip,
  Chip
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Timer as TimerIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  Circle as CircleIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { menuItems, mockNotifications } from '../data/mockData';
import Logo from '../components/Logo';
import { formatDistanceToNow } from 'date-fns';
import { useTheme as useThemeContext } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';

const DRAWER_WIDTH = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  justifyContent: 'space-between',
  backgroundColor: 'rgba(2, 6, 23, 0.75)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const NotificationCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(2, 6, 23, 0.75)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '12px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(2, 6, 23, 0.85)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 30px rgba(0, 0, 0, 0.15)',
  }
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  fontWeight: 500,
  background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    backgroundColor: 'rgba(2, 6, 23, 0.75)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
    },
  },
}));

const AdminLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { mode, toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);
  const [authorizedMenuItems, setAuthorizedMenuItems] = useState(menuItems);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // Close drawer by default on mobile
    if (isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      navigate('/auth/login');
      return;
    }

    const user = JSON.parse(userStr);
    const filteredItems = menuItems.filter(item =>
      item.allowedRoles.includes(user.role)
    );
    setAuthorizedMenuItems(filteredItems);
  }, [navigate]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleNotificationsClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/auth/login');
  };

  const getMenuIcon = (iconName: string) => {
    switch (iconName) {
      case 'dashboard':
        return <DashboardIcon />;
      case 'analytics':
        return <AnalyticsIcon />;
      case 'people':
        return <PeopleIcon />;
      case 'timer':
        return <TimerIcon />;
      case 'security':
        return <SecurityIcon />;
      case 'settings':
        return <SettingsIcon />;
      default:
        return <CircleIcon />;
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default', position: 'relative', overflow: 'hidden' }}>
      <ParticleBackground variant="sparse" />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%' },
          ml: { sm: drawerOpen ? `${DRAWER_WIDTH}px` : 0 },
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(10, 25, 41, 0.8)',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', height: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                background: 'linear-gradient(to right, #fff, #94A3B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Creator Labs
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
              <IconButton color="inherit" onClick={toggleTheme}>
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
            </Tooltip>
            <IconButton
              color="inherit"
              onClick={handleNotificationsClick}
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <Badge
                badgeContent={4}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#0EA5E9',
                    color: '#fff',
                  }
                }}
              >
                <NotificationsIcon sx={{ color: '#94A3B8' }} />
              </Badge>
            </IconButton>

            <IconButton
              onClick={handleProfileClick}
              sx={{
                p: 0,
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <UserAvatar>
                U
              </UserAvatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <StyledDrawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <DrawerHeader>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Logo sx={{ width: 24, height: 24, color: '#0EA5E9' }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 600,
                background: 'linear-gradient(to right, #fff, #94A3B8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Creator Labs
            </Typography>
          </Box>
          {isMobile && (
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: '#94A3B8' }} />
            </IconButton>
          )}
        </DrawerHeader>

        <List sx={{ px: 2 }}>
          {authorizedMenuItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path || 
                         (item.path === '/admin' && location.pathname === '/admin/dashboard')}
                onClick={() => isMobile && handleDrawerToggle()}
                sx={{
                  borderRadius: '12px',
                  minHeight: 48,
                  px: 2,
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(14, 165, 233, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(14, 165, 233, 0.12)',
                    },
                    '& .MuiListItemIcon-root': {
                      color: '#0EA5E9',
                    },
                    '& .MuiTypography-root': {
                      color: '#E2E8F0',
                      fontWeight: 500,
                    },
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    color: '#94A3B8',
                    justifyContent: 'center',
                  }}
                >
                  {getMenuIcon(item.icon)}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    sx: {
                      color: '#94A3B8',
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { 
            xs: '100%',
            sm: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
          },
          minHeight: '100vh',
          backgroundColor: 'transparent',
          marginTop: '64px',
          position: 'relative',
          zIndex: 1,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Outlet />
      </Box>

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
        PaperProps={{
          sx: {
            width: 200,
            mt: 1.5,
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" sx={{ color: '#94A3B8' }} />
          </ListItemIcon>
          <Typography variant="body2" sx={{ color: '#E2E8F0' }}>Logout</Typography>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleNotificationsClose}
        sx={{
          '& .MuiPaper-root': {
            width: 360,
            maxHeight: 480,
            overflow: 'auto',
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(17, 25, 40, 0.95)' 
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px) saturate(180%)',
            border: `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.125)' 
              : 'rgba(209, 213, 219, 0.3)'}`,
            boxShadow: theme.palette.mode === 'dark'
              ? '0 8px 32px rgba(0, 0, 0, 0.5)'
              : '0 8px 32px rgba(0, 0, 0, 0.1)',
            mt: 1,
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.2)' 
                : 'rgba(0, 0, 0, 0.2)',
              borderRadius: '4px',
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ 
          p: 2, 
          borderBottom: `1px solid ${theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'rgba(0, 0, 0, 0.1)'}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h6" sx={{ 
            color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
            fontWeight: 600
          }}>
            Notifications
          </Typography>
          <Chip
            label={`${mockNotifications.length} New`}
            size="small"
            sx={{
              backgroundColor: theme.palette.mode === 'dark' 
                ? 'rgba(59, 130, 246, 0.2)' 
                : 'rgba(59, 130, 246, 0.1)',
              color: '#3B82F6',
              fontWeight: 500,
            }}
          />
        </Box>
        <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
          {mockNotifications.map((notification) => (
            <Box 
              key={notification.id} 
              sx={{ 
                p: 1,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)' 
                    : 'rgba(0, 0, 0, 0.02)',
                },
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start',
                p: 1.5,
                backgroundColor: theme.palette.mode === 'dark' 
                  ? 'rgba(17, 25, 40, 0.6)' 
                  : 'rgba(255, 255, 255, 0.8)',
                borderRadius: 1,
                border: `1px solid ${theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.1)'}`,
              }}>
                <Box sx={{ 
                  mr: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 1,
                  backgroundColor: (() => {
                    switch (notification.type) {
                      case 'success':
                        return 'rgba(16, 185, 129, 0.2)';
                      case 'warning':
                        return 'rgba(245, 158, 11, 0.2)';
                      case 'error':
                        return 'rgba(239, 68, 68, 0.2)';
                      default:
                        return 'rgba(59, 130, 246, 0.2)';
                    }
                  })(),
                }}>
                  {notification.type === 'success' && <CheckCircleIcon sx={{ color: '#10B981' }} />}
                  {notification.type === 'warning' && <WarningIcon sx={{ color: '#F59E0B' }} />}
                  {notification.type === 'error' && <ErrorIcon sx={{ color: '#EF4444' }} />}
                  {notification.type === 'info' && <NotificationsIcon sx={{ color: '#3B82F6' }} />}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ 
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#1E293B',
                    fontWeight: 600,
                    mb: 0.5,
                  }}>
                    {notification.title}
                  </Typography>
                  <Typography sx={{ 
                    color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                    fontSize: '0.875rem',
                    mb: 1,
                  }}>
                    {notification.message}
                  </Typography>
                  <Typography sx={{ 
                    color: '#64748B',
                    fontSize: '0.75rem',
                  }}>
                    {formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        {mockNotifications.length === 0 && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography sx={{ 
              color: '#64748B',
              fontSize: '0.875rem',
            }}>
              No new notifications
            </Typography>
          </Box>
        )}
      </Menu>
    </Box>
  );
};

export default AdminLayout;
