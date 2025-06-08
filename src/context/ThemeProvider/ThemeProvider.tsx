import React, { useState, useEffect } from 'react';

import { ThemeContext } from './ThemeContext';

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');

    // Обновляем favicon в зависимости от темы
    const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = darkTheme
        ? 'https://cdn.joincommunity.xyz/gateway/favicon_dark.png'
        : 'https://cdn.joincommunity.xyz/gateway/favicon_light.png';
    }
  }, [darkTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkTheme(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleThemeHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
