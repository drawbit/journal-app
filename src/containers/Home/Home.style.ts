import styled from 'styled-components';

import { palette } from 'styled-theme';
import { transition } from '../../settings/style-util';

type Props = {
  background: number;
};

export const HomeWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: ${(props: Props) => palette('gradient', props.background)};
  ${transition()};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: calc(100vh - 116px);

  padding-top: 100px;
  padding-bottom: 60px;
`;
