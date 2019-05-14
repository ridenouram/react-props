import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  it('snapshot', () => {
    const wrapper = shallow(<Button color="red"></Button>);
    expect(wrapper).toMatchSnapshot();
  });
});
