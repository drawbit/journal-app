import styled from 'styled-components';
import { palette } from 'styled-theme';
import Switch from 'react-switch';

export const StyledSwitch = styled(Switch)`
  background-color: ${palette('background', 2)};
  margin: 0 10px;
`;

export const EmojiIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: Arial sans-serif;
  padding-top: 1px;
`;
