// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixmeType = any;

export type Nothing = null | undefined;

export const Nothing = null as Nothing;

export type Maybe<T> = T | Nothing;

export type RateType = 1 | 2 | 3 | 4 | 5;

export type CardData = {
  rate?: RateType;
  description?: string;
  datetime: Date;
  savedDate?: Date;
};

export type CardDataObj = {
  [key: string]: CardData;
};
