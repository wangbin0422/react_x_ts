import React, {Fragment} from 'react';
import {scopedClassMaker} from '../untils/classes';

import {Icon} from '../index'
import './dialog.scss'

interface IProps {
  visible: boolean;
}

const sc = scopedClassMaker('ui-dialog');

const Dialog: React.FunctionComponent<IProps> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={sc('mask')}></div>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name="close"></Icon>
          </div>
          <header className={sc('header')}>notice</header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment>
      :
      null
  )
};

export default Dialog