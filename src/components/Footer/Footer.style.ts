import styled from 'styled-components';
import { palette } from 'styled-theme';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  height: 56px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: ${palette('text', 3)};
  background: rgba(0, 0, 0, 0.05);
`;
