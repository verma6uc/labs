import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Chip,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Analytics as AnalyticsIcon,
  People as PeopleIcon,
  Timer as TimerIcon,
  Security as SecurityIcon,
  Settings as SettingsIcon,
  Circle as CircleIcon,
  Logout as LogoutIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Error as ErrorIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';
import Logo from '../components/Logo';
import { mockNotifications } from '../data/mockData';
import { commonBackground } from './AdminLayoutStyles';

interface MenuIconProps {
  name: string;
}

export const MenuIcon = React.memo<MenuIconProps>(({ name }) => {
  switch (name) {
    case 'dashboard':
      return <DashboardIcon sx={{ fontSize: 20 }} />;
    case 'analytics':
      return <AnalyticsIcon sx={{ fontSize: 20 }} />;
    case 'people':
      return <PeopleIcon sx={{ fontSize: 20 }} />;
    case 'timer':
      return <TimerIcon sx={{ fontSize: 20 }} />;
    case 'security':
      return <SecurityIcon sx={{ fontSize: 20 }} />;
    case 'settings':
      return <SettingsIcon sx={{ fontSize: 20 }} />;
    default:
      return <CircleIcon sx={{ fontSize: 20 }} />;
  }
});

MenuIcon.displayName = 'MenuIcon';

interface HeaderLogoProps {
  onClick?: () => void;
}

export const HeaderLogo = React.memo<HeaderLogoProps>(({ onClick }) => (
  <Box 
    component={Link} 
    to="/admin/dashboard"
    onClick={onClick}
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1.5,
      textDecoration: 'none',
      '&:hover': {
        opacity: 0.8
      }
    }}
  >
    <Logo sx={{ width: 28, height: 28, color: '#0EA5E9' }} />
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
));

HeaderLogo.displayName = 'HeaderLogo';

interface ProfileMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const ProfileMenu = React.memo<ProfileMenuProps>(({ anchorEl, open, onClose, onLogout }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    PaperProps={{
      sx: {
        width: 200,
        mt: 1.5,
        ...commonBackground,
        border: '1px solid rgba(255, 255, 255, 0.1)',
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    <MenuItem onClick={onLogout}>
      <ListItemIcon>
        <LogoutIcon sx={{ fontSize: 20, color: '#94A3B8' }} />
      </ListItemIcon>
      <Typography variant="body2" sx={{ color: '#E2E8F0' }}>Logout</Typography>
    </MenuItem>
  </Menu>
));

ProfileMenu.displayName = 'ProfileMenu';

interface NotificationsMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

export const NotificationsMenu = React.memo<NotificationsMenuProps>(({ anchorEl, open, onClose }) => (
  <Menu
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}
    sx={{
      '& .MuiPaper-root': {
        width: 360,
        maxHeight: 480,
        overflow: 'auto',
        ...commonBackground,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
        mt: 1,
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '4px',
        },
      },
    }}
    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
  >
    <Box sx={{ 
      p: 2, 
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Typography variant="h6" sx={{ 
        color: '#E2E8F0',
        fontWeight: 600
      }}>
        Notifications
      </Typography>
      <Chip
        label={`${mockNotifications.length} New`}
        size="small"
        sx={{
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            },
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'flex-start',
            p: 1.5,
            backgroundColor: 'rgba(17, 25, 40, 0.6)',
            borderRadius: 1,
            border: '1px solid rgba(255, 255, 255, 0.1)',
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
              {notification.type === 'success' && <CheckCircleIcon sx={{ color: '#10B981', fontSize: 24 }} />}
              {notification.type === 'warning' && <WarningIcon sx={{ color: '#F59E0B', fontSize: 24 }} />}
              {notification.type === 'error' && <ErrorIcon sx={{ color: '#EF4444', fontSize: 24 }} />}
              {notification.type === 'info' && <NotificationsIcon sx={{ color: '#3B82F6', fontSize: 24 }} />}
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ 
                color: '#E2E8F0',
                fontWeight: 600,
                mb: 0.5,
              }}>
                {notification.title}
              </Typography>
              <Typography sx={{ 
                color: '#94A3B8',
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
));

NotificationsMenu.displayName = 'NotificationsMenu';
