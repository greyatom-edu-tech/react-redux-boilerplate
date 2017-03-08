import _ from 'lodash';
import { routeChange } from 'shared/actions/routes';

import auth from './auth';
import hasPermission from './permissions';

const user = {
  type: 'admin',
};

export const observeNavigation = callBack => (
  (nextState, replace, cb, dispatch) => {
    if (!auth.loggedIn()) {
      // return to login screen
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    const currentRoute = _.last(nextState.routes);
    if (hasPermission(currentRoute.name, user.type)) {
      dispatch(routeChange(nextState.routes, currentRoute.name));
      if (typeof callBack === 'function') {
        callBack(dispatch);
      }
    } else {
      // navigate to not authorised screen
      replace({
        pathname: '/no-auth',
        state: { nextPathname: nextState.location.pathname },
      });
    }
  }
);

export default {
  observeNavigation,
};
