export type VariantType = 'h1' | 'h2' | 'h3' | 'h4';
export type ColorType =
  | 'normal'
  | 'active'
  | 'light'
  | 'white'
  | 'col1'
  | 'col2'
  | 'col3'
  | 'col4'
  | 'col5';

export type VariantOption = {
  [key in VariantType]: VariantType;
};

export type ColorOption = {
  [key in ColorType]: ColorType;
};

export type Props = {
  variant?: VariantType;
  color?: ColorType;
  children: React.ReactNode;
};
