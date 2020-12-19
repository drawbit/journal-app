import React from 'react';
import { storiesOf } from '@storybook/react';

import ThemeSwitch from './themeSwitch';

storiesOf('Components/ThemeSwitch', module).add('default', () => {
  return (
    <>
      <ThemeSwitch isLight toggle={() => {}} />
    </>
  );
});
