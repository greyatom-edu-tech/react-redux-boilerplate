import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import Home from '../home';

function setup() {
  const props = {};
  const enzymeWrapper = shallow(<Home />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('Home Component', () => {
  const { enzymeWrapper } = setup();
  it('should render self', () => {
    expect(enzymeWrapper.find('h1').length).toBe(1);
  });
});
