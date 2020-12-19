import styled from 'styled-components';
import { palette } from 'styled-theme';

import { Props } from './types';
import { transition } from '../../settings/style-util';

const colors = {
  col1: [palette('col1', 0), palette('col1', 2)],
  col2: [palette('col2', 0), palette('col2', 2)],
  col3: [palette('col3', 0), palette('col3', 2)],
  col4: [palette('col4', 0), palette('col4', 2)],
  col5: [palette('col5', 0), palette('col5', 2)],
};

export const ButtonWrapper = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 51px;
  margin: 0;
  border: 1px solid ${(props: Props) => colors[props.color || 'col1'][0]};
  border-radius: 12px;

  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: '-0.02em';

  color: ${(props: Props) => colors[props.color || 'col1'][0]};
  background: transparent;
  outline: none;
  ${transition()};

  &:hover {
    color: #fff;
    background: ${(props: Props) => colors[props.color || 'col1'][0]};
  }

  &:focus,
  &:active {
    color: #fff;
    background: ${(props: Props) => colors[props.color || 'col1'][1]};
    border: 1px solid ${(props: Props) => colors[props.color || 'col1'][1]};
  }
`;
