import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

describe('Input', () => {
  it('prop label = hello', () => {
    const snap = renderer
      .create(<Input label="hello"/>)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
  it('prop labelPosition = top', () => {
    const snap = renderer
      .create(<Input label="hello" labelPosition="top"/>)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
  it('prop error = wrong', () => {
    const snap = renderer
      .create(<Input error="wrong"/>)
      .toJSON();
    expect(snap).toMatchSnapshot();
  });
});