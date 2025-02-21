'use client';

import { useEffect, useState } from 'react';

export default function ThemeProvider() {
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window === 'undefined') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(getSystemTheme);

  useEffect(() => {
    // Apply theme to <html>
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    const timeout = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 50); 

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setTheme(getSystemTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return null; // No UI needed, only modifies <html>
}