import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

function setup() {
  const enzymeWrapper = shallow(<Header />);
  return {
    enzymeWrapper,
  };
}

describe('Header Component', () => {
  const { enzymeWrapper } = setup();
  it('should render header', () => {
    expect(enzymeWrapper.find('header').length).toBe(1);
  });
});
