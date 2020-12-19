import { ThemeType } from '../settings/theme';
import { CardData, CardDataObj } from '../types/app';

export const THEME_TYPE = 'THEME_TYPE';
export const DATA_KEY = 'DATA_KEY';
export const CUR_DATA_KEY = 'CUR_DATA_KEY';

export const saveTheme = (themeType: string) => {
  localStorage.setItem(THEME_TYPE, themeType);
};

export const getTheme = () => {
  return localStorage.getItem(THEME_TYPE) || ThemeType.LIGHT;
};

export const saveCardData = (data: CardDataObj, curData: CardData) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
  localStorage.setItem(CUR_DATA_KEY, JSON.stringify(curData));
};

export const getCardData = (): { data: CardDataObj; curData: CardData } => {
  const data = localStorage.getItem(DATA_KEY) || JSON.stringify({});
  const curData =
    localStorage.getItem(CUR_DATA_KEY) ||
    JSON.stringify({ datetime: new Date() });
  return {
    data: JSON.parse(data),
    curData: JSON.parse(curData),
  };
};
