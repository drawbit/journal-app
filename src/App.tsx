import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';

import { store as reduxStore, history } from './redux/store';
import PublicRoutes from './router';
import { AppHolder } from './settings/appStyle';
import themes from './settings/theme';
import { useTheme } from './hooks/useTheme';

const Main: React.FC = (): JSX.Element => {
  const [isLight] = useTheme();
  const defaultTheme = isLight ? themes.light : themes.dark;

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppHolder>
        <PublicRoutes history={history} />
      </AppHolder>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <IntlProvider locale={navigator.language}>
        <Main />
      </IntlProvider>
    </ReduxProvider>
  );
}

export default App;
