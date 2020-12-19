import React from 'react';
import { storiesOf } from '@storybook/react';

import Footer from '.';

storiesOf('Components/Footer', module).add('default', () => {
  return <Footer datetime={new Date('2020-08-01')} />;
});
