import React from 'react';
import { shallow } from 'enzyme';
import Color from './Color';

describe('Header Component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Color name="yellow peach" hex="#deb993" rgb={{ red: 222, green: 185, blue: 147 }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
