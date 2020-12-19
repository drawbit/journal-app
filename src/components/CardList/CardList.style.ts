import styled from 'styled-components';

import CardItem from '../CardItem';
import { transition } from '../../settings/style-util';

export const CardListWrapper = styled.div`
  display: flex;
  height: 140px;
`;

type Props = {
  opacity: number;
};

export const CardListItem = styled(CardItem)<Props>`
  min-width: 206px;
  margin-right: 20px;
  opacity: ${(props: Props) => props.opacity};
  ${transition()};
`;
