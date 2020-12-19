import React from 'react';

import {
  CardItemWrapper,
  CardStatus,
  CardDate,
  CardDescription,
} from './CardItem.style';
import { Props } from './types';
import { getDateString } from '../../helpers/datetimeHelper';

const CardItem: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    rate,
    description = '',
    datetime,
    onClick = () => {},
    active = false,
    ...otherProps
  } = props;

  const dateString = getDateString(datetime);

  return (
    <CardItemWrapper onClick={onClick} active={active} {...otherProps}>
      <CardStatus rate={rate}>{rate || ''}</CardStatus>
      <CardDate>{dateString}</CardDate>
      {!!description && <CardDescription>{description}</CardDescription>}
    </CardItemWrapper>
  );
};

export default CardItem;
