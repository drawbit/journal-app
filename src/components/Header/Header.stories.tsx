import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '.';

storiesOf('Components/Header', module).add('default', () => {
  return <Header logo="Simplejournal" />;
});
