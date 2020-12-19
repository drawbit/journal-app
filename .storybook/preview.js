import React from 'react';
import { addDecorator } from '@storybook/react/dist/client/preview';
import { withKnobs } from '@storybook/addon-knobs';
import { configure } from '@storybook/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { withThemes } from '@react-theming/storybook-addon';

import { lightTheme, darkTheme } from '../src/settings';
import { AppHolder } from '../src/settings/appStyle';

const createMockStore = configureStore([]);
const mockStore = createMockStore({});

addDecorator(withKnobs);

addDecorator((story) => (
  <ReduxProvider store={mockStore}>
    <AppHolder>{story()}</AppHolder>
  </ReduxProvider>
));

addDecorator((story) => (
  <Router>
    <Route path="/" component={() => story()} />
  </Router>
));

const providerFn = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <AppHolder>{children}</AppHolder>
  </ThemeProvider>
);

addDecorator(withThemes(null, [lightTheme, darkTheme], { providerFn }));

const req = require.context('../src', true, /\.stories\.(js|ts|tsx)$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
