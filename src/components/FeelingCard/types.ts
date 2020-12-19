import { CardData, RateType } from '../../types/app';

export type Props = {
  rate?: RateType;
  description?: string;
  savedDate?: Date;
  datetime?: Date;
  onChooseRate?: (rate: RateType) => void;
  onSave?: (content: CardData) => void;
};
