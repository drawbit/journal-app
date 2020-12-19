export type Palette = {
  gradient: string[];
  pink: string[];
  purple: string[];
  blue: string[];
  darkBlue: string[];
  dark: string[];
  gray: string[];
};

type ThemePalette = {
  gradient: string[];
  col1: string[];
  col2: string[];
  col3: string[];
  col4: string[];
  col5: string[];
  border: string[];
  background: string[];
  text: string[];
};

type ThemeSize = {
  headerHeight: string;
  footerHeight: string;
  card: {
    width: string;
    height: string;
  };
  font: {
    small: string;
    default: string;
    big: string;
    large: string;
  };
};

type ThemeFont = {
  primary: string;
  pre: string;
};

export type Theme = {
  palette: ThemePalette;
  sizes: ThemeSize;
  fonts: ThemeFont;
};
