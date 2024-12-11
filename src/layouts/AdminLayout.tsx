import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { menuItems } from '../data/mockData';
import { useTheme as useThemeContext } from '../contexts/ThemeContext';
import ParticleBackground from '../components/ParticleBackground';
import StyledListItemButton from '../components/shared/StyledListItemButton';

import {
  DRAWER_WIDTH,
  commonBackground,
  DrawerHeader,
  UserAvatar,
  StyledDrawer,
  DrawerContent,
  ParticleWrapper,
  StyledListItemIcon,
  StyledListItemText,
  StyledAppBar,
  MainContent,
} from './AdminLayoutStyles';

import {
  getMenuIcon,
  HeaderLogo,
  ProfileMenu,
  NotificationsMenu,
} from './AdminLayoutComponents';

const AdminLayout = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState<null | HTMLElement>(null);
  const [authorizedMenuItems, setAuthorizedMenuItems] = useState(menuItems);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
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

  return (
    <Box sx={{ 
      display: 'flex', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      ...commonBackground,
    }}>
      <ParticleBackground variant="sparse" />
      <StyledAppBar
        position="fixed"
        sx={{
          width: { sm: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%' },
          ml: { sm: drawerOpen ? `${DRAWER_WIDTH}px` : 0 },
          zIndex: (theme) => theme.zIndex.drawer + 1,
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
              <MenuIcon sx={{ fontSize: 24 }} />
            </IconButton>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.25rem',
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
                <NotificationsIcon sx={{ color: '#94A3B8', fontSize: 24 }} />
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
      </StyledAppBar>

      <StyledDrawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={drawerOpen}
        onClose={handleDrawerToggle}
      >
        <ParticleWrapper>
          <ParticleBackground variant="sparse" />
        </ParticleWrapper>
        <DrawerContent>
          <DrawerHeader>
            <HeaderLogo onClick={() => isMobile && handleDrawerToggle()} />
            {isMobile && (
              <IconButton onClick={handleDrawerToggle}>
                <CloseIcon sx={{ color: '#94A3B8', fontSize: 24 }} />
              </IconButton>
            )}
          </DrawerHeader>

          <List sx={{ px: 2, py: 2, position: 'relative', zIndex: 2 }}>
            {authorizedMenuItems.map((item) => (
              <ListItem key={item.path} disablePadding>
                <StyledListItemButton
                  to={item.path}
                  selected={location.pathname === item.path || 
                           (item.path === '/admin' && location.pathname === '/admin/dashboard')}
                  onClick={() => isMobile && handleDrawerToggle()}
                >
                  <StyledListItemIcon>
                    {getMenuIcon(item.icon)}
                  </StyledListItemIcon>
                  <StyledListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      sx: {
                        color: '#94A3B8',
                      },
                    }}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </StyledDrawer>

      <MainContent
        sx={{
          p: { xs: 2, sm: 3 },
          width: { 
            xs: '100%',
            sm: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
          },
          marginTop: '64px',
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Outlet />
      </MainContent>

      <ProfileMenu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleProfileClose}
        onLogout={handleLogout}
      />

      <NotificationsMenu
        anchorEl={notificationsAnchorEl}
        open={Boolean(notificationsAnchorEl)}
        onClose={handleNotificationsClose}
      />
    </Box>
  );
};

export default AdminLayout;
