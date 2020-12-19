import { Reducer } from 'redux';
import { AppActionsTypes } from './actions';
import * as actions from './actions';

import { State } from './types';
import {
  getTheme,
  saveTheme,
  getCardData,
  saveCardData,
} from '../../helpers/webStorageHelper';
import { getDataIndex } from '../../helpers/datetimeHelper';

const defaultTheme: string = getTheme();
const { data: initialData, curData: initialCurData } = getCardData();

const initState: State = {
  themeType: defaultTheme,
  data: initialData,
  curData: initialCurData,
};

const reducer: Reducer<State, AppActionsTypes> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case actions.SET_THEME: {
      const { payload } = action;
      saveTheme(payload);

      return {
        ...state,
        themeType: payload,
      };
    }
    case actions.SAVE_DATA: {
      const { payload } = action;
      const dataIndex = getDataIndex(payload.datetime);
      const newData = {
        ...state.data,
        [dataIndex]: payload,
      };

      saveCardData(newData, payload);

      return {
        ...state,
        data: newData,
        curData: payload,
      };
    }
    case actions.SET_CUR_DATA: {
      const { payload } = action;
      saveCardData(state.data, payload);
      return {
        ...state,
        curData: payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
