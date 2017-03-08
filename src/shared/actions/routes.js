import { ROUTE_CHANGE } from 'shared/constants/actions';

export function routeChange(routes, currentRouteName) {
  const routeName = currentRouteName;
  return {
    type: ROUTE_CHANGE,
    payload: {
      routes,
      currentRouteName: routeName,
    },
  };
}

export default {
  routeChange,
};
