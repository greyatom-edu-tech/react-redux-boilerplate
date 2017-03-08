import expect from 'expect';

import { ROUTE_CHANGE } from 'shared/constants/actions';
import routing from '../routing';

const initialState = { locationBeforeTransitions: null };
const routes = ['Route1', 'Route2'];
const currentRouteName = 'Route1';
const payload = {
  routes,
  currentRouteName,
};

describe('Routing reducer', () => {
  it('should return the initial state', () => {
    expect(
      routing(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle route change', () => {
    // reducer adds product with quantity as 1
    expect(
      routing({}, {
        type: ROUTE_CHANGE,
        payload,
      })
    ).toEqual({
      routes,
      currentRouteName,
    });
  });
});
