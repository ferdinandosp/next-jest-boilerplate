/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import Button from '../pages/components/button';

describe('With Enzyme', () => {
  it('Testing button', () => {
    const app = shallow(<Button />);

    expect(app.find('div').text()).toEqual('This is a button');
  });
});
