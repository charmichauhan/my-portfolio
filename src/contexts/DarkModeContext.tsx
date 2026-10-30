'use client';

import { createContext, useContext, useEffect, useSyncExternalStore } from 'react';

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

const listeners = new Set<() => void>();

const getIsDarkMode = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' || (
    savedTheme !== 'light' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
};

const subscribeToDarkMode = (listener: () => void) => {
  listeners.add(listener);
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', listener);
  window.addEventListener('storage', listener);

  return () => {
    listeners.delete(listener);
    mediaQuery.removeEventListener('change', listener);
    window.removeEventListener('storage', listener);
  };
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useSyncExternalStore(
    subscribeToDarkMode,
    getIsDarkMode,
    () => false,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    listeners.forEach((listener) => listener());
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
