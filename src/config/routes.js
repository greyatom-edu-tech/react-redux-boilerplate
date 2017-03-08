import React from 'react';
import { Router, createRoutes } from 'react-router';
import { Provider } from 'react-redux';

import routeConfig from 'screens/App/shared/utils/route-config';
import store, { history } from './store';

function mixStoreToRoutes(routes) {
  return routes && routes.map(route => ({
    ...route,
    childRoutes: mixStoreToRoutes(route.childRoutes),
    onEnter: route.onEnter && ((props, replaceState, cb) => {
      route.onEnter(props, replaceState, cb, store.dispatch);
      cb();
    }),
  }));
}

const allRoutes = mixStoreToRoutes(createRoutes(routeConfig));

const routes = (
  <Provider store={store}>
    <Router history={history} routes={allRoutes} />
  </Provider>
);

export default routes;
