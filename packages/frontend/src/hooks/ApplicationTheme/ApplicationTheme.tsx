import React, { createContext, FC, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { ThemeKey, themes } from '../../styles/themes';

type ThemeContext = [
  { name: ThemeKey; theme: DefaultTheme },
  (k: ThemeKey) => void,
];

const themeContext = createContext<ThemeContext | undefined>(undefined);

interface Props {
  defaultTheme: ThemeKey;
}

export const ApplicationThemeProvider: FC<Props> = (props) => {
  const { defaultTheme, children } = props;

  const [themeName, setThemeName] = useState<ThemeKey>(defaultTheme);
  const theme = themes[themeName];

  return (
    <themeContext.Provider value={[{ name: themeName, theme }, setThemeName]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </themeContext.Provider>
  );
};

export function useApplicationTheme(): ThemeContext {
  const applicationTheme = useContext(themeContext);
  if (!applicationTheme) {
    throw new Error('Missing wrapping ApplicationThemeProvider');
  }

  return applicationTheme;
}
