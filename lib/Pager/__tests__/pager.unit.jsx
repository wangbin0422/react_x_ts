import React from 'react';
import renderer from 'react-test-renderer';
import Pager from '../Pager';
import {mount} from 'enzyme';

describe('Pager', () => {
  it('prop current = 1', () => {
    const temp = renderer
      .create(<Pager current={1} total={3}/>)
      .toJSON();
    expect(temp).toMatchSnapshot();
  });
  it('prop total = 5', () => {
    const temp = renderer
      .create(<Pager total={5}/>)
      .toJSON();
    expect(temp).toMatchSnapshot();
  });
  it('应该有两个省略号', () => {
    const temp = renderer
      .create(<Pager total={20} current={6}/>)
      .toJSON();
    expect(temp).toMatchSnapshot();
  });
  it('点击对应按钮current发生对应的变化', () => {
    const c = mount(
      <Pager
        current={1}
        total={5}
        onChange={(value) => c.setProps({current: value})}
      />
    );
    expect(c.find('.ui-pager-active').text()).toEqual('1');
    c.find('.ui-pager-item').last().simulate('click');
    expect(c.find('.ui-pager-active').text()).toEqual('5');
  });
});