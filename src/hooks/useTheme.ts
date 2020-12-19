import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../redux/store';
import * as appActions from '../redux/app/actions';
import { ThemeType } from '../settings/theme';

export type ToggleTheme = (value: boolean) => void;
type UseThemeHook = () => [boolean, ToggleTheme];

export const useTheme: UseThemeHook = () => {
  const themeType = useSelector((state: RootState) => state.App.themeType);
  const dispatch = useDispatch();
  const setTheme = useCallback(
    (themeType: string) => dispatch(appActions.setTheme(themeType)),
    [dispatch],
  );
  const toggleTheme = useCallback(
    (value: boolean) => {
      setTheme(value ? ThemeType.LIGHT : ThemeType.DARK);
    },
    [setTheme],
  );

  const isLight = themeType === ThemeType.LIGHT;

  return [isLight, toggleTheme];
};
