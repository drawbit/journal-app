import React from 'react';
import { storiesOf } from '@storybook/react';

import FeelingCard from '.';

storiesOf('Components/FeelingCard', module)
  .add('default', () => {
    return (
      <>
        <FeelingCard />
      </>
    );
  })
  .add('with saved data', () => {
    const desc =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elitelitelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

    return (
      <>
        <FeelingCard
          rate={2}
          description={desc}
          savedDate={new Date('2020-08-02')}
          datetime={new Date('2020-08-02')}
        />
      </>
    );
  });
