import React from 'react';
import {classes} from '../untils/classes'
import './importAll'
import './icon.scss'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  // onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  const { className, name, ...restProps } = props;
  return (
      <svg
        className={classes('ui-icon', className)}
        {...restProps}>
        <use xlinkHref={`#${name}`}></use>
      </svg>
  )
};
export default Icon;