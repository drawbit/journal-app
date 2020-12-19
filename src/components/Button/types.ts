export type ColorType = 'col1' | 'col2' | 'col3' | 'col4' | 'col5';

export type ColorOption = {
  [key in ColorType]: ColorType;
};

export type Props = {
  color?: ColorType;
  onClick?: () => void;
  title?: string;
};
