import dark from './dark';
import light from './light';

const themes = {
  dark,
  light,
};

export const LIGHT_THEME = 'LIGHT_THEME';
export const DARK_THEME = 'DARK_THEME';

export enum ThemeType {
  DARK = 'DARK_THEME',
  LIGHT = 'LIGHT_THEME',
}

export default themes;
