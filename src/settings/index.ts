import theme from './theme';

const { light: defaultTheme } = theme;

export const lightTheme = { name: 'Light', ...theme.light };

export const darkTheme = { name: 'Dark', ...theme.dark };

export { defaultTheme };
