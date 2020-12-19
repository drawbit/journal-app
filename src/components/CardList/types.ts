import { CardData, CardDataObj } from '../../types/app';

export type Props = {
  data: CardDataObj;
  selectedDate: Date;
  onSelect?: (data: CardData) => void;
};
