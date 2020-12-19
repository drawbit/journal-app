import styled from 'styled-components';
import { palette } from 'styled-theme';

import Typography from '../Typography';
import { RatingNumberProps as Props } from './types';
import { transition } from '../../settings/style-util';
import { media } from '../../helpers/styleHelper';

const colors: string[] = [
  palette('col1', 0),
  palette('col2', 0),
  palette('col3', 0),
  palette('col4', 0),
  palette('col5', 0),
];

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingContent = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  ${media.md`
    margin: 0 6px;
  `}
`;

export const RatingNumberWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  margin: 0 6px;
  border-radius: 50%;
  border: 1.5px solid
    ${(props: Props) =>
      props.selected ? colors[props.value - 1] : palette('border', 1)};
  background: ${(props: Props) =>
    props.selected ? colors[props.value - 1] : 'transparent'};
  ${transition()};
  cursor: pointer;

  &:first-child {
    margin-left: 0px;
    ${media.md`
      margin-left: 6px;
    `}
  }
`;

export const RatingLabel = styled(Typography).attrs({
  variant: 'h3',
  color: 'light',
})`
  ${media.md`
    display: block;
  `}
  display: none;
`;
