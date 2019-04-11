import React from 'react';
import Icon from '../Icon';
import renderer from 'react-test-renderer'
import { mount } from 'enzyme';

describe('Icon', () => {
  it('is svg', () => {
    const json = renderer.create(<Icon name="wechat"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onClick', () => {
    // let n = 1
    // const func = () => {
    //   n = 2
    // }
    const func = jest.fn()
    const c = mount(<Icon name="qq" onClick={func}/>)
    c.find('svg').simulate('click')
    expect(func).toBeCalled()
  })
})