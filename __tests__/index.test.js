/* eslint-env jest */

import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Home } from '../pages';

const Render = <Home home="Hello World!" />;

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(Render);

    expect(app.find('p').text()).toEqual('Hello World!');
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = renderer.create(Render);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
