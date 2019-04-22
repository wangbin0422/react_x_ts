import React from 'react';
import {scopedClassMaker} from '../untils/classes';
const sc = scopedClassMaker('ui-layout');

interface IProps extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('header', {extra: className})} {...rest}>
      Header
    </div>
  )
};

export default Header;