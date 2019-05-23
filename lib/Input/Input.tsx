import React from 'react';
import {scopedClassMaker} from '../untils/classes';
import './input.scss'

const sc = scopedClassMaker('ui-input');

export interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  length?: number | string;
  label?: string;
  labelPosition?: 'left' | 'top';
  error?: string;
  errorPosition?: 'right' | 'bottom'
}

const Input: React.FunctionComponent<IProps> = (props) => {
  const {length, type, label, labelPosition, error, errorPosition, ...restProps} = props;
  const width = length ? `calc(${length}em + 18px` : undefined;
  const c1 = labelPosition === 'top' ? 'block' : 'inline-block';
  const c2 = errorPosition === 'bottom' ? 'column' : '';
  return (
    <div className={sc('wrapper')}>
      {label && <label className={sc('label')} style={{display: c1}}>{label}</label>}
      <input
        type={type}
        {...restProps}
        className={sc('')}
        style={{width}}
      />
      {error && <span className={sc('error', {extra: c2})}>{error}</span>}
    </div>
  );
};
Input.defaultProps = {
  type: 'text'
};
export default Input;