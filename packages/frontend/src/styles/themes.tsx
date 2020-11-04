import { DefaultTheme } from 'styled-components';

// Override DefaultTheme types to provide nice typings in templates
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      navBar: string;
      primary: string;
      secondary: string;
    };
    fontSize: {
      1: string;
      2: string;
      3: string;
    };
  }
}

const themeBlue: DefaultTheme = {
  colors: {
    background: '#e3f2fd',
    navBar: '#039be5',
    primary: '#f44336',
    secondary: '#f44336',
  },
  fontSize: {
    1: '1em',
    2: '1.2em',
    3: '1.5em',
  },
};

export const themes = {
  blue: themeBlue,
};

export type ThemeKey = keyof typeof themes;
