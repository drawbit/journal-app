import React from 'react';
import { storiesOf } from '@storybook/react';

import CardItem from '.';

storiesOf('Components/CardItem', module).add('with colors', () => {
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elitelitelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

  return (
    <>
      <CardItem datetime={new Date()} />
      <CardItem rate={1} datetime={new Date()} description={desc} />
      <CardItem rate={2} datetime={new Date('2020-08-04')} description={desc} />
      <CardItem rate={3} datetime={new Date('2020-08-03')} description={desc} />
      <CardItem rate={4} datetime={new Date('2020-08-02')} description={desc} />
      <CardItem
        rate={5}
        datetime={new Date('2020-08-01')}
        description={desc}
        active
      />
    </>
  );
});
