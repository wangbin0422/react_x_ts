import React from 'react';
import {scopedClassMaker} from '../untils/classes';
const sc = scopedClassMaker('ui-layout');

interface IProps extends React.HTMLAttributes<HTMLElement>{

}

const Aside: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}
    </div>
  )
};

export default Aside;