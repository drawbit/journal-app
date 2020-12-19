import { RateType } from '../Rating/types';

export type Props = {
  rate?: RateType;
  onClick?: () => void;
  description?: string;
  active?: boolean;
  datetime: Date;
};
