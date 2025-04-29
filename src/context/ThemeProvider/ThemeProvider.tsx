import React, { useState } from 'react';

import { ThemeContext } from './ThemeContext';

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
  const lightTgTheme = true;

  const [darkTheme, setDarkTheme] = useState(!lightTgTheme);

  const toggleThemeHandler = () => {
    setDarkTheme((prevState) => !prevState);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkTheme: darkTheme,
        toggleTheme: toggleThemeHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
