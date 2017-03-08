import App from 'screens/App';

import DashboardRouteConfig from '../../screens/Dashboard/shared/utils/route-config';
import HomeRouteConfig from '../../screens/Home/shared/utils/route-config';

const AppRouteConfig = {
  path: '/',
  component: App,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/home'),
  },
  childRoutes: [
    DashboardRouteConfig,
    HomeRouteConfig,
  ],
};

export default AppRouteConfig;
