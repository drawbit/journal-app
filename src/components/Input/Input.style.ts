import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Props } from './types';
import { transition } from '../../settings/style-util';

export const InputWrapper = styled.input<Props>`
  &,
  &:focus,
  &:hover,
  &:active {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.02em;

    color: ${palette('text', 0)};
    background: transparent;
    border: none;
    outline: none;
    ${transition()}
  }
`;

export const TextAreaWrapper = styled.textarea<Props>`
  &,
  &:focus,
  &:hover,
  &:active {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.02em;

    color: ${palette('text', 0)};
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    ${transition()}
  }
`;
