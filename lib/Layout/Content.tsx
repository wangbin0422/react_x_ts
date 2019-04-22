import React from 'react';
import {scopedClassMaker} from '../untils/classes';
const sc = scopedClassMaker('ui-layout');

interface IProps extends React.HTMLAttributes<HTMLElement>{

}
const Content: React.FunctionComponent<IProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content',{extra: className})} {...rest}>
      {props.children}
    </div>
  )
};

export default Content;