import styled from 'styled-components';
import { palette } from 'styled-theme';
import Typography from '../Typography';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 60px;

  padding-right: 30px;

  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: ${palette('text', 3)};
  background: transparent;
`;

export const Logo = styled(Typography).attrs({
  variant: 'h2',
  color: 'white',
})`
  margin-right: 30px;
`;
