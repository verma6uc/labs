import { createTheme, alpha } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#0EA5E9',
      light: '#38BDF8',
      dark: '#0284C7',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export const getTheme = (mode: PaletteMode) => {
  const isLight = mode === 'light';

  return createTheme({
    ...defaultTheme,
    palette: {
      ...defaultTheme.palette,
      mode,
      background: {
        default: isLight ? '#EBF8FF' : '#0F172A',
        paper: isLight ? '#FFFFFF' : '#1E293B',
      },
      text: {
        primary: isLight ? '#1A365D' : '#E2E8F0',
        secondary: isLight ? '#2D4A7D' : '#94A3B8',
      },
      divider: alpha(isLight ? '#64748B' : '#94A3B8', isLight ? 0.15 : 0.12),
      error: {
        main: '#EF4444',
        light: '#F87171',
        dark: '#DC2626',
      },
      warning: {
        main: '#F59E0B',
        light: '#FBBF24',
        dark: '#D97706',
      },
      success: {
        main: '#10B981',
        light: '#34D399',
        dark: '#059669',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: isLight ? '#CBD5E1 #F1F5F9' : '#475569 #1E293B',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              width: 8,
              height: 8,
              backgroundColor: isLight ? '#F1F5F9' : '#1E293B',
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: isLight ? '#CBD5E1' : '#475569',
              border: '2px solid transparent',
              backgroundClip: 'content-box',
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
              backgroundColor: isLight ? '#94A3B8' : '#64748B',
            },
          },
        },
      },
    },
  });
};

export const getCardStyle = (mode: PaletteMode) => {
  const isLight = mode === 'light';

  return {
    background: alpha(isLight ? '#FFFFFF' : '#1E293B', isLight ? 0.95 : 0.6),
    backdropFilter: 'blur(16px) saturate(180%)',
    border: `1px solid ${alpha(isLight ? '#B4C6E3' : '#475569', isLight ? 0.2 : 0.1)}`,
    boxShadow: isLight ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: isLight ? '0 8px 25px rgba(0, 0, 0, 0.12)' : 'none',
      border: `1px solid ${alpha(isLight ? '#0EA5E9' : '#475569', isLight ? 0.3 : 0.2)}`,
      '& .MuiChip-root': {
        transform: 'scale(1.05)',
      },
    },
    '& .MuiChip-root': {
      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    },
  };
};

export default defaultTheme;
