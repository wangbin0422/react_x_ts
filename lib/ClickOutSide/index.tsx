import React, {HTMLAttributes, PureComponent, RefObject} from 'react';
import PropTypes from 'prop-types';
import {scopedClassMaker} from '../untils/classes';
import './index.scss';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  handler?: (e: React.MouseEvent) => void;
  exclude?: RefObject<Element>
}

const sc = scopedClassMaker('ui-blank');

class ClickBlank extends PureComponent<IProps> {
  static propTypes = {
    handler: PropTypes.func
  };

  private readonly myRef: RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount(): void {
    if (this.props.handler) {
      document.addEventListener('click', this.handler);
    }
  }

  componentWillUnmount(): void {
    if (this.props.handler) {
      document.removeEventListener('click', this.handler);
    }
  }

  handler = (e: MouseEvent | TouchEvent) => {
    console.log(this.props.exclude);
    /**
     * contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点后代节点或是
     node 节点本身.则返回true , 否则返回 false.
     * */
    if (this.myRef.current === null) {return;}
    if (this.props.exclude &&
      this.props.exclude.current &&
      this.props.exclude.current.contains(e.target as Node)) { return; }
    if (!document.contains(e.target as Node)) { return; }
    if (!this.myRef.current.contains(e.target as Node)) {
      this.props.handler && this.props.handler.call(e.target, e);
    }
  };

  render() {
    const {handler, children,exclude, ...restProps} = this.props;
    return (
      <div
        className={sc('')}
        ref={this.myRef}
        {...restProps}
      >
        {children}
      </div>
    );
  }
}

export default ClickBlank;