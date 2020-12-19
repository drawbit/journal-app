import React from 'react';

import ThemeSwitch from '../themeSwitch';
import { HeaderWrapper, Logo } from './Header.style';
import { Props } from './types';

import { useTheme } from '../../hooks/useTheme';

const Header: React.FC<Props> = (props: Props): JSX.Element => {
  const { logo } = props;
  const [isLight, toggleTheme] = useTheme();

  return (
    <HeaderWrapper>
      <ThemeSwitch isLight={isLight} toggle={toggleTheme} />
      <Logo>{logo}</Logo>
    </HeaderWrapper>
  );
};

export default Header;
