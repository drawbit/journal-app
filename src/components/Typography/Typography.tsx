import React from 'react';

import { TypographyWrapper } from './Typography.style';
import { Props } from './types';

const Typography: React.FC<Props> = (props: Props): JSX.Element => {
  const { variant = 'h2', color = 'normal', children, ...otherProps } = props;

  return (
    <TypographyWrapper variant={variant} color={color} {...otherProps}>
      {children}
    </TypographyWrapper>
  );
};

export default Typography;
