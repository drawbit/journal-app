import { CardData } from '../../types/app';

export type SetTheme = {
  type: typeof SET_THEME;
  payload: string;
};

export const SET_THEME = 'SET_THEME';

export const setTheme = (payload: string): SetTheme => ({
  type: SET_THEME,
  payload,
});

export type SaveData = {
  type: typeof SAVE_DATA;
  payload: CardData;
};

export const SAVE_DATA = 'SAVE_DATA';

export const saveData = (payload: CardData): SaveData => ({
  type: SAVE_DATA,
  payload,
});

export type SetCurData = {
  type: typeof SET_CUR_DATA;
  payload: CardData;
};

export const SET_CUR_DATA = 'SET_CUR_DATA';

export const setCurData = (payload: CardData): SetCurData => ({
  type: SET_CUR_DATA,
  payload,
});

export type AppActionsTypes = ReturnType<
  typeof setTheme | typeof saveData | typeof setCurData
>;
