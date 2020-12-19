import styled from 'styled-components';
import { palette, font } from 'styled-theme';

import interFont from '../assets/font/Inter.ttf';

export const AppHolder = styled.div`
  @font-face {
    font-family: ${font('primary')};
    src: url(${interFont});
    font-weight: normal;
    font-display: fallback;
  }

  font-family: ${font('primary')};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  input,
  textarea,
  span,
  div,
  img,
  th,
  td,
  svg {
    &::selection {
      background: ${palette('text', 0)};
      color: ${palette('background', 0)};
    }
  }
`;
