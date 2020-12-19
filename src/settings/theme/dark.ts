import lightTheme from './light';
import { palette, WHITE } from './palette';
import { Theme } from './type';

const { gray, dark } = palette;

const darkTheme: Theme = JSON.parse(JSON.stringify(lightTheme));

darkTheme.palette = {
  ...darkTheme.palette,
  border: [
    gray[3], // 0: light border
    gray[4], // 0: normal border
  ],
  background: [
    dark[7], // 0: card content bg
    dark[6], // 1: card header bg
    dark[9], // 2: white bg
  ],
  text: [
    WHITE, // 0: Normal Text
    gray[4], // 1: Active (dark)
    gray[4], // 2: light text
    WHITE, // 3: white text
  ],
};

export default darkTheme;
