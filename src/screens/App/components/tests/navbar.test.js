import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../navbar';

function setup() {
  const enzymeWrapper = shallow(<Navbar />);
  return {
    enzymeWrapper,
  };
}

describe('Navbar Component', () => {
  const { enzymeWrapper } = setup();
  it('should render navbar', () => {
    expect(enzymeWrapper.find('nav').length).toBe(1);
  });
});
