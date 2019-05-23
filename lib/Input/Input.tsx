import React from 'react';
import {scopedClassMaker} from '../untils/classes';
import './input.scss'

const sc = scopedClassMaker('ui-input');

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  length?: number | string;
}

const Input: React.FunctionComponent<IProps> = (props) => {
  const {length, type, ...restProps} = props;
  const width = length ? `calc(${length}em + 18px` : undefined;
  return (
    <div className={sc('wrapper')}>
      <input
        type={type}
        {...restProps}
        className={sc('')}
        style={{width}}/>
    </div>
  );
};
Input.defaultProps = {
  type: 'text'
};
export default Input;