import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../dashboard';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<Dashboard />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Dashboard Wrapper Component', () => {
  const { enzymeWrapper } = setup();
  it('should render self', () => {
    expect(enzymeWrapper.find('h1').length).toBe(1);
  });
});
