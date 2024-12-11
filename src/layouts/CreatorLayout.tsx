import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  LightbulbOutlined as IdeaIcon,
  Architecture as BlueprintIcon,
  Analytics as MetricsIcon,
  Extension as IntegrationsIcon,
  SmartToy as AIIcon,
  Refresh as IterationIcon,
  Notifications as NotificationsIcon,
  ExitToApp as LogoutIcon,
  Person as ProfileIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const drawerWidth = 280;

const menuItems = [
  { 
    text: 'Home', 
    icon: <DashboardIcon />, 
    path: '/creator/dashboard',
    description: 'Overview and quick actions'
  },
  { 
    text: 'Ideas & Projects', 
    icon: <IdeaIcon />, 
    path: '/creator/projects',
    description: 'Manage your product ideas'
  },
  { 
    text: 'Blueprint & PRD', 
    icon: <BlueprintIcon />, 
    path: '/creator/blueprint',
    description: 'Design and document your product'
  },
  { 
    text: 'Metrics & Performance', 
    icon: <MetricsIcon />, 
    path: '/creator/metrics',
    description: 'Track product outcomes'
  },
  { 
    text: 'Integrations', 
    icon: <IntegrationsIcon />, 
    path: '/creator/integrations',
    description: 'Connect external services'
  },
  { 
    text: 'AI Agents & Insights', 
    icon: <AIIcon />, 
    path: '/creator/ai-insights',
    description: 'AI-powered recommendations'
  },
  { 
    text: 'Feedback & Iteration', 
    icon: <IterationIcon />, 
    path: '/creator/feedback',
    description: 'Improve based on feedback'
  },
];

const CreatorLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate('/login');
  };

  const drawer = (
    <Box sx={{
      height: '100%',
      backgroundColor: 'rgba(17, 25, 40, 0.95)',
      backdropFilter: 'blur(8px)',
      borderRight: '1px solid rgba(255, 255, 255, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ 
        p: 3, 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1,
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      }}>
        <Typography variant="h6" noWrap component="div" sx={{ 
          color: '#E2E8F0',
          fontWeight: 600,
          letterSpacing: '0.5px',
        }}>
          Creator Labs
        </Typography>
      </Box>

      <Box sx={{ flex: 1, overflow: 'auto', py: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                navigate(item.path);
                if (isMobile) setMobileOpen(false);
              }}
              sx={{
                my: 0.5,
                mx: 2,
                borderRadius: 2,
                backgroundColor: location.pathname === item.path ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  '& .MuiListItemIcon-root': {
                    color: '#3B82F6',
                  },
                  '& .MuiListItemText-primary': {
                    color: '#E2E8F0',
                  },
                  '& .MuiListItemText-secondary': {
                    color: 'rgba(148, 163, 184, 0.8)',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: location.pathname === item.path ? '#3B82F6' : 'rgba(148, 163, 184, 0.8)',
                minWidth: 40,
                transition: 'color 0.2s ease-in-out',
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                secondary={item.description}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: location.pathname === item.path ? '#E2E8F0' : 'rgba(148, 163, 184, 0.8)',
                    fontWeight: location.pathname === item.path ? 500 : 400,
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease-in-out',
                  },
                  '& .MuiListItemText-secondary': {
                    color: 'rgba(148, 163, 184, 0.6)',
                    fontSize: '0.75rem',
                    transition: 'color 0.2s ease-in-out',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ 
        p: 2, 
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
      }}>
        <Avatar
          alt={user?.name || 'User'}
          src={user?.avatar}
          sx={{ width: 40, height: 40 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ 
            color: '#E2E8F0',
            fontSize: '0.9rem',
            fontWeight: 500,
          }}>
            {user?.name}
          </Typography>
          <Typography sx={{ 
            color: 'rgba(148, 163, 184, 0.8)',
            fontSize: '0.75rem',
          }}>
            Creator
          </Typography>
        </Box>
        <IconButton
          size="small"
          onClick={() => navigate('/creator/settings')}
          sx={{ 
            color: 'rgba(148, 163, 184, 0.8)',
            '&:hover': {
              color: '#E2E8F0',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <SettingsIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0F172A' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'rgba(17, 25, 40, 0.95)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Badge badgeContent={3} color="primary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title="Account">
              <IconButton
                onClick={handleMenuClick}
                size="small"
                sx={{ padding: 0.5 }}
              >
                <Avatar
                  alt={user?.name || 'User'}
                  src={user?.avatar}
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Tooltip>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            PaperProps={{
              sx: {
                backgroundColor: 'rgba(17, 25, 40, 0.95)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                mt: 1,
                '& .MuiMenuItem-root': {
                  color: '#E2E8F0',
                  gap: 1.5,
                  py: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.05)',
                  },
                },
              },
            }}
          >
            <MenuItem onClick={() => navigate('/creator/profile')}>
              <ProfileIcon fontSize="small" />
              Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <LogoutIcon fontSize="small" />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          pt: { xs: 8, sm: 9 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CreatorLayout;
