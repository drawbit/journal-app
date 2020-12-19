export type RateType = 1 | 2 | 3 | 4 | 5;

export type Props = {
  rate?: RateType;
  onSelect?: (rate: number) => void;
};

export type RatingNumberProps = {
  value: number;
  selected: boolean;
  onClick: () => void;
};
