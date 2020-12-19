import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, radios } from '@storybook/addon-knobs';

import Button from '.';
import { ColorType, ColorOption } from './types';

storiesOf('Components/Button', module)
  .add('default', () => {
    return <Button title="Button" />;
  })
  .add('with colors', () => {
    return (
      <>
        <Button color="col1" title="Text" />
        <Button color="col2" title="Text" />
        <Button color="col3" title="Text" />
        <Button color="col4" title="Text" />
        <Button color="col5" title="Text" />
      </>
    );
  })
  .add('with properties', () => {
    const colorOption: ColorOption = {
      col1: 'col1',
      col2: 'col2',
      col3: 'col3',
      col4: 'col4',
      col5: 'col5',
    };
    const color: ColorType = radios('color', colorOption, 'col1');

    const ButtonText = text('Button text', 'This is Button text');

    return <Button color={color} title={ButtonText} />;
  });
