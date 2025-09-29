import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const colors = {
    light: {
      primary: '#FF6B35',
      secondary: '#4A90E2',
      background: '#FFFFFF',
      card: '#F8F8F8',
      text: '#333333',
      textSecondary: '#666666',
      border: '#E0E0E0',
      success: '#06D6A0',
      warning: '#FFD166',
      error: '#FF3B30',
      white: '#FFFFFF',
    },
    dark: {
      primary: '#FF8C5A',
      secondary: '#6BA8FF',
      background: '#121212',
      card: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      border: '#333333',
      success: '#4ECDC4',
      warning: '#FFE66D',
      error: '#FF6B6B',
      white: '#FFFFFF',
    }
  };

  const theme = {
    colors: colors[isDarkMode ? 'dark' : 'light'],
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};