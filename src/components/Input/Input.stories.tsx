import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Input from '.';

storiesOf('Components/Input', module)
  .add('default', () => {
    return <Input value="this is text" />;
  })
  .add('with properties', () => {
    const inputText = text('Input text', 'This is Input text');

    return <Input value={inputText} />;
  });
