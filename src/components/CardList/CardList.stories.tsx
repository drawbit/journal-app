import React from 'react';
import { storiesOf } from '@storybook/react';

import CardList from '.';

storiesOf('Components/CardList', module).add('default', () => {
  return (
    <>
      <CardList data={{}} selectedDate={new Date()} />
      <CardList data={{}} selectedDate={new Date('2020-08-01')} />
    </>
  );
});
