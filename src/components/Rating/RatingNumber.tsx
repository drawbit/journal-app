import React from 'react';

import { RatingNumberWrapper } from './Rating.style';
import { RatingNumberProps } from './types';
import Typography from '../Typography';

const RatingNumber: React.FC<RatingNumberProps> = (
  props: RatingNumberProps,
): JSX.Element => {
  const { value, selected, onClick } = props;

  return (
    <RatingNumberWrapper value={value} selected={selected} onClick={onClick}>
      <Typography variant="h1" color={selected ? 'white' : 'light'}>
        {value}
      </Typography>
    </RatingNumberWrapper>
  );
};

export default RatingNumber;
