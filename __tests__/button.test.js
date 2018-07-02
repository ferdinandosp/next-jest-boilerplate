/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../pages/components/button'

describe('With Enzyme', () => {
  it('Testing button', () => {
    const app = shallow(<Button />)

    expect(app.find('div').text()).toEqual('This is a button')
  })
})
