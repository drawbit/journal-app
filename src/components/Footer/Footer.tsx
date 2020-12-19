import React from 'react';

import { FooterWrapper } from './Footer.style';
import { Props } from './types';

import { getDateString } from '../../helpers/datetimeHelper';

const Footer: React.FC<Props> = (props: Props): JSX.Element => {
  const { datetime } = props;

  const dateString = getDateString(datetime);

  return <FooterWrapper>{dateString}</FooterWrapper>;
};

export default Footer;
