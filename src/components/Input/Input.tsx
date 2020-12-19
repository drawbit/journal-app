import React from 'react';

import { InputWrapper, TextAreaWrapper } from './Input.style';
import { Props } from './types';

const Input: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    onChange = () => {},
    value = '',
    multiline = false,
    ...otherProps
  } = props;

  if (multiline) {
    return (
      <TextAreaWrapper value={value} onChange={onChange} {...otherProps} />
    );
  }
  return <InputWrapper value={value} onChange={onChange} {...otherProps} />;
};

export default Input;
