import React from 'react';
import { shallow } from 'enzyme';
import Dog from './Dog';

describe('Header Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Dog />);
    expect(wrapper).toMatchSnapshot();
  });
});
