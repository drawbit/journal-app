import React from 'react';

import { ButtonWrapper } from './Button.style';
import { Props } from './types';

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  const { color = 'col1', onClick = () => {}, title = '' } = props;

  return (
    <ButtonWrapper onClick={onClick} color={color}>
      {title}
    </ButtonWrapper>
  );
};

export default Button;
