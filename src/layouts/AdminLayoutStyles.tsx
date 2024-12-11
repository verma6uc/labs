import { styled } from '@mui/material';
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const DRAWER_WIDTH = 280;

export const commonBackground = {
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(20px)',
};

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  ...commonBackground,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  zIndex: 2
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  fontWeight: 500,
  background: 'linear-gradient(135deg, #0EA5E9 0%, #3B82F6 100%)',
  border: '2px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    ...commonBackground,
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '3px',
    },
  },
}));

export const DrawerContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  height: '100%',
  ...commonBackground,
});

export const ParticleWrapper = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
  overflow: 'hidden'
});

export const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 'auto',
  marginRight: '16px',
  '& svg': {
    fontSize: 24,
  },
});

export const StyledListItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    fontSize: '0.9375rem',
    fontWeight: 500,
  },
});

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  ...commonBackground,
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
}));

export const MainContent = styled(Box)(({ theme }) => ({
  ...commonBackground,
  flexGrow: 1,
  minHeight: '100vh',
  position: 'relative',
  zIndex: 1,
}));
