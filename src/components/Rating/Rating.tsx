import React from 'react';

import { RatingWrapper, RatingContent, RatingLabel } from './Rating.style';
import { Props } from './types';
import RatingNumber from './RatingNumber';

const Rating: React.FC<Props> = (props: Props): JSX.Element => {
  const { rate = 0, onSelect = () => {} } = props;

  const renderRatings = () => {
    return [1, 2, 3, 4, 5].map((index: number) => {
      return (
        <RatingNumber
          value={index}
          selected={rate === index}
          onClick={() => onSelect(index)}
        />
      );
    });
  };

  return (
    <RatingWrapper>
      <RatingLabel>Awful</RatingLabel>
      <RatingContent>{renderRatings()}</RatingContent>
      <RatingLabel>Amazing</RatingLabel>
    </RatingWrapper>
  );
};

export default Rating;
