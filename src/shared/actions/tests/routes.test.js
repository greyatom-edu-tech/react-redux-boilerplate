import expect from 'expect';

import { ROUTE_CHANGE } from 'shared/constants/actions';
import * as actions from '../routes.js';

describe('Route Action Creators', () => {
  it('should create an action to change routes with currentRouteName', () => {
    const routes = ['Route1', 'Route2'];
    const currentRouteName = 'Route1';
    const expected = {
      type: ROUTE_CHANGE,
      payload: {
        routes,
        currentRouteName,
      },
    };
    const actual = actions.routeChange(routes, currentRouteName);
    expect(actual).toEqual(expected);
  });
});
