'use client';

import { createContext, useContext, ReactNode } from 'react';
import { colors, fonts } from '@/lib/theme';

interface ThemeContextType {
  colors: typeof colors;
  fonts: typeof fonts;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const value = {
    colors,
    fonts,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
