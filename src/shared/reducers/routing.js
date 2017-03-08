import { LOCATION_CHANGE } from 'react-router-redux';

import { ROUTE_CHANGE } from 'shared/constants/actions';

const initialState = { locationBeforeTransitions: null };

const routing = (state = initialState, action) => {
  // This LOCATION_CHANGE case is copied from react-router-redux's routerReducer
  if (action.type === LOCATION_CHANGE) {
    return {
      ...state,
      locationBeforeTransitions: action.payload,
    };
  }
  if (action.type === ROUTE_CHANGE) {
    const { routes, currentRouteName } = action.payload;
    /* Custom logic for fetching penultimate route name if current doesn't exist */
    let cRN = currentRouteName;
    if (cRN === undefined && routes.length) {
      const penultimateRoute = routes[routes.length - 2];
      if (penultimateRoute && penultimateRoute.name) {
        cRN = penultimateRoute.name;
      }
    }
    /* Custom logic for fetching penultimate route name if current doesn't exist */
    return {
      ...state,
      routes,
      currentRouteName: cRN,
    };
  }

  return state;
};

export default routing;
