import React from 'react';
import {scopedClassMaker} from '../untils/classes';
import Icon from '../Icon/Icon';
import './pager.scss';

const sc = scopedClassMaker('ui-pager');

function range(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

interface IProps {
  current?: number;
  total: number;
  defaultCurrent?: number;
  onChange: (value: number) => void
}

interface IState {
  current?: number
}

class Pager extends React.Component<IProps, IState> {
  static defaultProps = {};

  get current() {
    if ('defaultCurrent' in this.props) {
      return this.state.current || 1;
    } else {
      return this.props.current || 1;
    }
  }

  set current(value) {
    if ('defaultCurrent' in this.props) {
      this.setState({current: value});
    } else {
      this.props.onChange && this.props.onChange(value);
    }
  }

  onClickItem = (value: number, e: React.MouseEvent<HTMLSpanElement>) => {
    if (value <= this.props.total && value >= 1) {
      this.current = value;
    }
  };

  jumpPage = (index: number) => {
    const prev = this.current - 5 <= 0 ? 1 : this.current - 5;
    const next = this.current + 5 >= this.props.total ? this.props.total : this.current + 5;
    return index === 1 ? prev : next;
  };

  get items() {
    return range(1, this.props.total)
      .filter(item => {
        if (item === 1) return true;
        if (item === 2) return true;
        else if (item === this.props.total) return true;
        else return Math.abs(item - this.current) <= 2;
      })
      .reduce((prev, next) => {
        const last = prev[prev.length - 1];
        const temp = last !== -1 && last - next < -1;
        return prev.concat(temp ? [-1, next] : [next]);
      }, [] as number[])
      .map((entry, idx) => entry === -1 ?
        <span
          key={idx}
          onClick={e => this.onClickItem(this.jumpPage(idx), e)}
        >
          ...
        </span> :
        <button
          key={idx}
          className={sc('item')}
          onClick={e => this.onClickItem(entry, e)}
        >
          {entry}
        </button>
      );

  }

  render() {
    return (
      <div className={sc('')}>
        <button
          className={sc('prev')}
          onClick={this.onClickItem.bind(null, this.current - 1)}
        >
          <Icon name="left"/>
        </button>
        {this.items}
        <button
          className={sc('next')}
          onClick={this.onClickItem.bind(null, this.current + 1)}
        >
          <Icon name="right"/>
        </button>
      </div>
    );
  }
}

export default Pager;