import classes, {scopedClassMaker} from '../classes';

describe('classes', () => {
  it('接受1个className', () => {
    const result = classes('a');
    expect(result).toEqual('a');
  });
  it('接受2个className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受2个className', () => {
    const result = classes('a', 'b');
    expect(result).toEqual('a b');
  });
  it('接受undefined, 不会出现undefined', () => {
    const result = classes('a', undefined);
    expect(result).toEqual('a');
  });
  it('接受特殊的参数', () => {
    const result = classes('a', false, null, '北京');
    expect(result).toEqual('a 北京');
  });
  it('不接受', () => {
    const result = classes();
    expect(result).toEqual('');
  });

});

describe('scopedClassMaker', () => {
  it('接收字符串或对象', () => {
    const sc = scopedClassMaker('ui-layout');
    expect(sc('')).toEqual('ui-layout');
    expect(sc('x')).toEqual('ui-layout-x');
    expect(sc({y: true, z: true})).toEqual('ui-layout-y ui-layout-z');
    expect(sc({y: true, z: true}, {extra: 'red'})).toEqual('ui-layout-y ui-layout-z red');

  });
});