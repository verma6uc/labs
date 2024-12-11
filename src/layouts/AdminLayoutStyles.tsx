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
export const HEADER_HEIGHT = 72;

export const commonBackground = {
  backgroundColor: 'rgba(17, 25, 40, 0.75)',
  backdropFilter: 'blur(20px)',
};

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0 24px',
  height: HEADER_HEIGHT,
  justifyContent: 'space-between',
  ...commonBackground,
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  position: 'relative',
  zIndex: 2
}));

export const UserAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  fontSize: '0.875rem',
  fontWeight: 600,
  background: 'rgba(14, 165, 233, 0.2)',
  color: '#0EA5E9',
  border: '1px solid rgba(14, 165, 233, 0.3)',
  transition: 'border-color 0.2s ease-in-out',
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
  color: '#94A3B8',
  '& svg': {
    fontSize: 20,
  },
});

export const StyledListItemText = styled(ListItemText)({
  '& .MuiTypography-root': {
    fontSize: '0.9375rem',
    fontWeight: 500,
    color: '#E2E8F0',
  },
});

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  ...commonBackground,
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
  height: HEADER_HEIGHT,
  '& .MuiToolbar-root': {
    height: HEADER_HEIGHT,
    minHeight: HEADER_HEIGHT,
    padding: '0 24px',
  },
}));

export const MainContent = styled(Box)(({ theme }) => ({
  ...commonBackground,
  flexGrow: 1,
  position: 'relative',
  zIndex: 1,
  padding: '16px',
  marginTop: HEADER_HEIGHT,
  height: `calc(100vh - ${HEADER_HEIGHT}px)`,
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
  },
  '& > div': {
    maxWidth: '1600px',
    width: '100%',
    margin: '0 auto',
    height: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    padding: '20px',
  },
}));
