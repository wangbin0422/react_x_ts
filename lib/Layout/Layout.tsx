import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../untils/classes';
import './layout.scss'
import Aside from './Aside';
const sc = scopedClassMaker('ui-layout');

interface IProps extends React.HTMLAttributes<HTMLElement>{
  children: ReactElement | Array<ReactElement>
}


const Layout: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  const _children = props.children as Array<ReactElement>;
  const hasAside = 'length' in _children &&
    _children.reduce((prev, current) => prev || current.type === Aside, false);
  return (
    <div
      className={sc({'': true, hasAside}, {extra: className})}
      {...rest}>
      {rest.children}
    </div>
  )
};

export default Layout;