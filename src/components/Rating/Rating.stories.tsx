import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import Rating from '.';
import { RateType } from './types';

storiesOf('Components/Rating', module)
  .add('default', () => {
    return <Rating />;
  })
  .add('with rate', () => {
    return (
      <>
        <Rating rate={1} />
        <Rating rate={2} />
        <Rating rate={3} />
        <Rating rate={4} />
        <Rating rate={5} />
      </>
    );
  })
  .add('with properties', () => {
    const rateOption = {
      range: true,
      min: 1,
      max: 5,
      step: 1,
    };
    const rate: RateType = number('Rate', 1, rateOption) as RateType;

    return <Rating rate={rate} />;
  });
