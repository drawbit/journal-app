import styled from 'styled-components';
import { palette } from 'styled-theme';

import { transition } from '../../settings/style-util';
import { media } from '../../helpers/styleHelper';
import Typography from '../Typography';
import Input from '../Input';

type Props = {
  active: boolean;
};

export const FeelingCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100vw - 40px);
  ${media.md`
    width: 860px;
  `}
  height: 524px;

  border-radius: 20px;
  box-shadow: 0px 20px 100px 10px rgba(0, 0, 0, 0.12);
  background: ${palette('background', 0)};
  ${transition()};
`;

export const CardHeader = styled.div`
  height: 147px;
  padding: 16px 36px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: ${palette('background', 1)};
`;

export const CardTitle = styled(Typography).attrs({
  variant: 'h2',
  color: 'normal',
})`
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const CardContent = styled.div`
  height: 200px;
  padding: 40px 36px;
  background: ${palette('background', 0)};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 93px;
  padding: 15px 36px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${palette('background', 0)};
`;

export const Divider = styled.div`
  display: flex;
  justify-content: center;
  width: 860px;

  &:after {
    content: '';
    width: 791px;
    border-top: 0.5px solid ${palette('border', 0)};
  }
`;

export const CardDate = styled(Typography).attrs({
  variant: 'h3',
  color: 'light',
})`
  margin: 15px 0;
`;

export const CardInput = styled(Input)`
  width: 100%;
`;
