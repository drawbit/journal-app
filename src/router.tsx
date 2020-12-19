import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { History } from 'history';

import asyncComponent from './helpers/AsyncFunc';

type AppRoute = {
  exact?: boolean;
  path: string;
  component: ReturnType<typeof asyncComponent>;
};

const routes: AppRoute[] = [
  {
    path: '',
    component: asyncComponent(() => import('./containers/Home')),
  },
  {
    exact: true,
    path: '/404',
    component: asyncComponent(() => import('./containers/404')),
  },
  {
    exact: true,
    path: '/500',
    component: asyncComponent(() => import('./containers/500')),
  },
];

const PublicRoutes = (props: { history: History }) => {
  return (
    <BrowserRouter>
      <div>
        {routes.map((singleRoute: AppRoute) => {
          const { exact = false, ...otherProps } = singleRoute;
          return <Route exact={exact} key={singleRoute.path} {...otherProps} />;
        })}
      </div>
    </BrowserRouter>
  );
};

export default PublicRoutes;
