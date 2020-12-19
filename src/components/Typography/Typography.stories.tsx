import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, radios } from '@storybook/addon-knobs';

import Typography from '.';
import { VariantType, ColorType, VariantOption, ColorOption } from './types';

storiesOf('Components/Typography', module)
  .add('default', () => {
    return <Typography>This is default Typography</Typography>;
  })
  .add('with variants', () => {
    return (
      <>
        <Typography variant="h1">This is h1 variant Typography</Typography>
        <Typography variant="h2">This is h1 variant Typography</Typography>
        <Typography variant="h3">This is h1 variant Typography</Typography>
        <Typography variant="h4">This is h1 variant Typography</Typography>
      </>
    );
  })
  .add('with colors', () => {
    return (
      <>
        <Typography variant="h1" color="normal">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="active">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="light">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="white">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="col1">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="col2">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="col3">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="col4">
          This is h1 variant Typography
        </Typography>
        <Typography variant="h1" color="col5">
          This is h1 variant Typography
        </Typography>
      </>
    );
  })
  .add('with properties', () => {
    const variantOption: VariantOption = {
      h1: 'h1',
      h2: 'h2',
      h3: 'h3',
      h4: 'h4',
    };
    const variant: VariantType = radios('variant', variantOption, 'h1');

    const colorOption: ColorOption = {
      normal: 'normal',
      active: 'active',
      light: 'light',
      white: 'white',
      col1: 'col1',
      col2: 'col2',
      col3: 'col3',
      col4: 'col4',
      col5: 'col5',
    };
    const color: ColorType = radios('color', colorOption, 'normal');

    const TypographyText = text('Typography text', 'This is Typography text');

    return (
      <Typography variant={variant} color={color}>
        {TypographyText}
      </Typography>
    );
  });
