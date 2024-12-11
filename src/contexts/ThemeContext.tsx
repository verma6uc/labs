import React, { createContext, useContext } from 'react';
import { PaletteMode } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { getTheme } from '../theme';

interface ThemeContextType {
  mode: PaletteMode;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark'
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Always use dark mode
  const mode: PaletteMode = 'dark';
  const theme = getTheme(mode);

  return (
    <ThemeContext.Provider value={{ mode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
