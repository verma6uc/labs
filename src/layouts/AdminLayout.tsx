import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Popover,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Divider,
  Chip,
  useTheme,
  styled,
  ListItemButton,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Timer as TimerIcon,
  Security as SecurityIcon,
  Circle as CircleIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
} from '@mui/icons-material';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { mockAuth, mockNotifications, menuItems } from '../data/mockData';
import ParticleBackground from '../components/ParticleBackground';
import Logo from '../components/Logo';
import { formatDistanceToNow } from 'date-fns';
import { useTheme as useThemeContext } from '../contexts/ThemeContext';

const drawerWidth = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  justifyContent: 'space-between',
  backgroundColor: 'rgba(10, 25, 41, 0.8)',
  backdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
}));

const NotificationCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(16px) saturate(180%)',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  },
}));

const AdminLayout: React.FC = () => {
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
          width: { sm: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%' },
          ml: { sm: drawerOpen ? `${drawerWidth}px` : 0 },
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
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': { 
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
              }}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#0EA5E9',
                }}
              >
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            border: 'none',
            boxShadow: 'none',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(10, 25, 41, 0.8)',
            borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            zIndex: (theme) => theme.zIndex.drawer,
          },
        }}
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

        <List>
          {authorizedMenuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={location.pathname === item.path || 
                         (item.path === '/admin' && location.pathname === '/admin/dashboard')}
                onClick={() => isMobile && handleDrawerToggle()}
                sx={{
                  minHeight: 48,
                  px: 2.5,
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
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { 
            xs: '100%',
            sm: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%'
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
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 360 },
            maxWidth: '100%',
            maxHeight: { xs: '80vh', sm: 480 },
            mt: 1.5,
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#E2E8F0' }}>
            Notifications
          </Typography>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)' }} />
        <List sx={{ p: 0 }}>
          {mockNotifications.map((notification) => (
            <ListItem key={notification.id} sx={{ px: 2, py: 1.5 }}>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: 
                      notification.type === 'success' ? 'success.main' :
                      notification.type === 'warning' ? 'warning.main' :
                      notification.type === 'error' ? 'error.main' : 'info.main'
                  }}
                >
                  {notification.type === 'success' ? <CheckCircleIcon /> :
                   notification.type === 'warning' ? <WarningIcon /> :
                   notification.type === 'error' ? <ErrorIcon /> :
                   <NotificationsIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={notification.title}
                secondary={formatDistanceToNow(new Date(notification.timestamp), { addSuffix: true })}
                primaryTypographyProps={{ sx: { color: '#E2E8F0' } }}
                secondaryTypographyProps={{ sx: { color: '#94A3B8' } }}
              />
            </ListItem>
          ))}
        </List>
      </Menu>
    </Box>
  );
};

export default AdminLayout;
