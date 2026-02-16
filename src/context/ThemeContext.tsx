'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Theme, themes, themeFonts, ThemeColors } from '@/lib/theme';

interface ThemeContextType {
  theme: Theme;
  colors: ThemeColors;
  fonts: typeof themeFonts.coastal;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('coastal');

  const value = {
    theme,
    colors: themes[theme],
    fonts: themeFonts[theme],
    setTheme,
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
