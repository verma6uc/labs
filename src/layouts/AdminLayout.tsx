import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  Toolbar,
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
import AdminButton from '../components/shared/AdminButton';

import {
  DRAWER_WIDTH,
  HEADER_HEIGHT,
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
  MenuIcon as SidebarIcon,
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
  const [userInitials, setUserInitials] = useState('UN');

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

    if (user.name) {
      const names = user.name.split(' ');
      const initials = names.length > 1 
        ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
        : `${names[0][0]}${names[0][1]}`.toUpperCase();
      setUserInitials(initials);
    }
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
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: { sm: 'none' } }}>
            <AdminButton
              buttonType="secondary"
              isIconButton
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ fontSize: 24 }} />
            </AdminButton>
          </Box>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            marginLeft: 'auto'
          }}>
            <Box
              onClick={handleNotificationsClick}
              sx={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 1,
                cursor: 'pointer',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
            </Box>

            <Box
              onClick={handleProfileClick}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  '& .MuiAvatar-root': {
                    borderColor: 'rgba(14, 165, 233, 0.4)',
                  },
                },
              }}
            >
              <UserAvatar>
                {userInitials}
              </UserAvatar>
            </Box>
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
              <AdminButton
                buttonType="secondary"
                isIconButton
                onClick={handleDrawerToggle}
              >
                <CloseIcon sx={{ color: '#94A3B8', fontSize: 24 }} />
              </AdminButton>
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
                    <SidebarIcon name={item.icon} />
                  </StyledListItemIcon>
                  <StyledListItemText
                    primary={item.title}
                  />
                </StyledListItemButton>
              </ListItem>
            ))}
          </List>
        </DrawerContent>
      </StyledDrawer>

      <MainContent
        sx={{
          width: { 
            xs: '100%',
            sm: drawerOpen ? `calc(100% - ${DRAWER_WIDTH}px)` : '100%'
          },
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box sx={{ 
          maxWidth: '1400px', 
          width: '100%', 
          margin: '0 auto',
          minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Outlet />
        </Box>
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
