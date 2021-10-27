import React from 'react';
import { shallow } from 'enzyme';
import ReduxFun from './ReduxFun';

describe('ReduxFun section', () => {
  let target;

  beforeEach(() => {
    target = shallow(<ReduxFun />);
  });

  it('should have a title for 🐣 Redux Example', () => {
    expect(target.find("[test='redux-example']").text()).toBe(
      '🐣 Redux Example 🐥'
    );
  });
});
