import React from 'react';
import {scopedClassMaker} from '../untils/classes';
const sc = scopedClassMaker('ui-layout');

interface IProps extends React.HTMLAttributes<HTMLElement>{

}

const Footer: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('footer', {extra: className})} {...rest}>
      Footer
    </div>
  )
};

export default Footer;