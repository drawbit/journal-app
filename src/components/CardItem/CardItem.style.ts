import styled from 'styled-components';
import { palette } from 'styled-theme';

import { transition } from '../../settings/style-util';
import Typography from '../Typography';
import { RateType } from '../Rating/types';

const colors = [
  palette('col1', 0),
  palette('col1', 0),
  palette('col2', 0),
  palette('col3', 0),
  palette('col4', 0),
  palette('col5', 0),
];

type Props = {
  active: boolean;
};

export const CardItemWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 206px;
  height: 140px;

  padding: 16px 30px 16px 24px;

  background: ${palette('background', 1)};
  opacity: ${(props: Props) => (props.active ? 0.9 : 0.8)};

  &:hover {
    opacity: 1;
  }

  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;
  ${transition()};
`;

type CardStatusProps = {
  rate?: RateType;
};

export const CardStatus = styled.div<CardStatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 27px;
  height: 27px;
  border: 2px solid ${palette('background', 2)};
  border-radius: 50%;
  color: ${(props: CardStatusProps) => colors[props.rate || 0]};
  background: ${(props: CardStatusProps) =>
    props.rate ? palette('background', 2) : 'transparent'};
`;

export const CardDate = styled(Typography).attrs({
  variant: 'h3',
  color: 'active',
})`
  margin: 10px 0;
`;

export const CardDescription = styled(Typography).attrs({
  variant: 'h4',
  color: 'light',
})`
  position: relative;
  height: 36px;
  margin: 3px 0;
  overflow: hidden;
`;
