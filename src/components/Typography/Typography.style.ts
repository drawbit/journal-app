import styled from 'styled-components';
import { palette, key } from 'styled-theme';

import { Props } from './types';

const variantSettings = {
  h1: {
    size: key('sizes.font.large', '28px'),
    weight: 300,
    lineHeight: '34px',
    letterSpacing: '1px',
  },
  h2: {
    size: key('sizes.font.big', '24px'),
    weight: 'normal',
    lineHeight: '28px',
    letterSpacing: '-0.02em',
  },
  h3: {
    size: key('sizes.font.default', '16px'),
    weight: 500,
    lineHeight: '19px',
    letterSpacing: '-0.02em',
  },
  h4: {
    size: key('sizes.font.small', '12px'),
    weight: 'normal',
    lineHeight: '18px',
    letterSpacing: '-0.02em',
  },
};

const colors = {
  normal: palette('text', 0),
  active: palette('text', 1),
  light: palette('text', 2),
  white: palette('text', 3),
  col1: palette('col1', 0),
  col2: palette('col2', 0),
  col3: palette('col3', 0),
  col4: palette('col4', 0),
  col5: palette('col5', 0),
};

export const TypographyWrapper = styled.p<Props>`
  font-size: ${(props: Props) => variantSettings[props.variant || 'h2'].size};
  font-weight: ${(props: Props) =>
    variantSettings[props.variant || 'h2'].weight};
  letter-spacing: ${(props: Props) =>
    variantSettings[props.variant || 'h2'].letterSpacing};
  line-height: ${(props: Props) =>
    variantSettings[props.variant || 'h2'].lineHeight};
  color: ${(props: Props) => colors[props.color || 'normal']};
  margin: 0;
`;
