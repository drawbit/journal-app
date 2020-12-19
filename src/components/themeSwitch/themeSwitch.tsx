/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { StyledSwitch, EmojiIcon } from './themeSwitch.style';
import { ToggleTheme } from '../../hooks/useTheme';

type ComponentProps = {
  isLight: boolean;
  toggle: ToggleTheme;
  className?: string;
};

type Props = ComponentProps;

const AssetInfo: React.FC<Props> = (props: Props): JSX.Element => {
  const { isLight = true, toggle, ...otherProps } = props;

  const sunIcon = (
    <EmojiIcon role="img" aria-label="sun">
      ☀️
    </EmojiIcon>
  );
  const moonIcon = (
    <EmojiIcon role="img" aria-label="moon">
      🌙️
    </EmojiIcon>
  );

  return (
    <StyledSwitch
      checked={isLight}
      onChange={toggle}
      checkedIcon={sunIcon}
      uncheckedIcon={moonIcon}
      {...otherProps}
    />
  );
};

export default AssetInfo;
