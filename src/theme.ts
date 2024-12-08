import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0EA5E9',
    },
    secondary: {
      main: '#00BCD4',
    },
    background: {
      default: 'transparent',
      paper: 'transparent',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',
          padding: '8px 24px',
        },
      },
    },
  },
});

export default theme;
