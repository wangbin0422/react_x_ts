import React, {Fragment} from 'react';
import {scopedClassMaker} from '../untils/classes';
import Icon from '../Icon/Icon';
import './button.scss';

const sc = scopedClassMaker('ui-btn');
const sc_icon = scopedClassMaker('ui-icon');

interface IProps {
  level: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FunctionComponent<IProps> = (props) => {
  const icon = props.icon && <Icon name={props.icon}/>;
  const loadingIcon = (
    <Icon name="loading" className={sc_icon('loading')}/>
  );
  const iconWrapper = props.loading ? loadingIcon : icon;
  const content = typeof props.children === 'string' ? <span>{props.children}</span> : props.children;
  const inner = (
    props.iconPosition === 'left' ?
      <Fragment>{iconWrapper}{content}</Fragment>
      :
      <Fragment>{content}{iconWrapper}</Fragment>
  );

  const onClick = (e: React.MouseEvent) => {
    if (props.disabled) return e.preventDefault();
    props.onClick && props.onClick.call(null, e.target, e);
  };

  return (
    <button
      className={sc({'': true, [props.level]: true})}
      type={props.type}
      disabled={props.disabled}
      onClick={onClick}>
      {inner}
    </button>
  );
};
Button.defaultProps = {
  disabled: false,
  type: 'button',
  iconPosition: 'left'
};
export default Button;