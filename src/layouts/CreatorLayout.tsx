import React from 'react';
import { Box, List, ListItem, Toolbar, Typography, AppBar, IconButton, Badge, Avatar } from '@mui/material';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';
import StyledListItemButton from '../components/shared/StyledListItemButton';
import BeakerIcon from '../components/BeakerIcon';
import {
  Dashboard as DashboardIcon,
  Lightbulb as IdeaIcon,
  Architecture as BlueprintIcon,
  ShowChart as MetricsIcon,
  Extension as IntegrationsIcon,
  SmartToy as AIIcon,
  Feedback as FeedbackIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 280;

const menuItems = [
  { title: 'Dashboard', path: '/creator/dashboard', icon: <DashboardIcon /> },
  { title: 'Ideas & Projects', path: '/creator/projects', icon: <IdeaIcon /> },
  { title: 'Blueprint & PRD', path: '/creator/blueprint', icon: <BlueprintIcon /> },
  { title: 'Metrics', path: '/creator/metrics', icon: <MetricsIcon /> },
  { title: 'Integrations', path: '/creator/integrations', icon: <IntegrationsIcon /> },
  { title: 'AI Insights', path: '/creator/ai-insights', icon: <AIIcon /> },
  { title: 'Feedback', path: '/creator/feedback', icon: <FeedbackIcon /> },
];

const CreatorLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      backdropFilter: 'blur(20px)',
      overflow: 'hidden',
    }}>
      <ParticleBackground variant="sparse" />
      
      {/* Header */}
      <AppBar position="fixed" sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box 
            component={Link} 
            to="/"
            sx={{ 
              textDecoration: 'none', 
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              '&:hover': {
                color: '#0EA5E9',
              },
            }}
          >
            <BeakerIcon sx={{ color: '#0EA5E9', fontSize: 24 }} />
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '1.25rem',
                fontWeight: 600,
                background: 'linear-gradient(90deg, #0EA5E9 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textTransform: 'uppercase',
              }}
            >
              Creator Labs
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="inherit">
              <Badge badgeContent={3} color="error">
                <NotificationsIcon sx={{ color: '#94A3B8' }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <SettingsIcon sx={{ color: '#94A3B8' }} />
            </IconButton>
            <Avatar sx={{ width: 32, height: 32, bgcolor: '#0EA5E9' }}>S</Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: 'rgba(17, 25, 40, 0.75)',
        backdropFilter: 'blur(20px)',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto',
        mt: '64px', // Height of AppBar
      }}>
        <List sx={{ px: 2 }}>
          {menuItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <StyledListItemButton
                to={item.path}
                selected={location.pathname === item.path}
              >
                <Box sx={{ 
                  mr: 2,
                  color: location.pathname === item.path ? '#0EA5E9' : '#94A3B8',
                }}>
                  {item.icon}
                </Box>
                <Typography sx={{ 
                  color: location.pathname === item.path ? '#E2E8F0' : '#94A3B8',
                  fontWeight: location.pathname === item.path ? 600 : 400,
                }}>
                  {item.title}
                </Typography>
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ 
        flexGrow: 1,
        ml: `${DRAWER_WIDTH}px`,
        mt: '64px', // Height of AppBar
        position: 'relative',
        zIndex: 1,
      }}>
        <Box sx={{ 
          maxWidth: '1600px',
          margin: '0 auto',
          padding: { xs: '16px', sm: '20px' },
          minHeight: '100vh',
        }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default CreatorLayout;
