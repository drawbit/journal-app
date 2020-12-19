import { palette, WHITE } from './palette';
import { Theme } from './type';

const { gradient, pink, purple, blue, darkBlue, dark, gray } = palette;

const theme: Theme = {
  palette: {
    gradient,
    col1: [
      dark[7], // 0: default
      dark[6], // 1: light
      dark[8], // 2: active
    ],
    col2: [
      darkBlue[4], // 0: default
      darkBlue[3], // 1: light
      darkBlue[5], // 2: active
    ],
    col3: [
      blue[3], // 0: default
      blue[2], // 1: light
      blue[4], // 2: active
    ],
    col4: [
      purple[2], // 0: default
      purple[1], // 1: light
      purple[3], // 2: active
    ],
    col5: [
      pink[3], // 0: default
      pink[2], // 1: light
      pink[4], // 2: active
    ],
    border: [
      gray[3], // 0: light border
      gray[4], // 0: normal border
    ],
    background: [
      gray[0], // 0: card content bg
      gray[1], // 1: card header bg
      WHITE, // 2: white bg
    ],
    text: [
      gray[9], // 0: Normal Text
      gray[6], // 1: Active (dark)
      gray[5], // 2: light text
      WHITE, // 3: white text
    ],
  },
  sizes: {
    headerHeight: '80px',
    footerHeight: '56px',
    card: {
      width: '206px',
      height: '140px',
    },
    font: {
      small: '12px',
      default: '16px',
      big: '24px',
      large: '28px',
    },
  },
  fonts: {
    primary: 'Inter',
    pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  },
};

export default theme;
