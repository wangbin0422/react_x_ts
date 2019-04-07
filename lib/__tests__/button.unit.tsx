import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer'

describe('button', () => {
  it('is btn', () => {
    const json = renderer.create(<Button/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})