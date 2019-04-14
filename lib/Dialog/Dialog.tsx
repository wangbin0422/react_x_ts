import React, {Fragment, ReactElement} from 'react';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from '../untils/classes';

import {Icon} from '../index'
import './dialog.scss'

interface IProps {
  visible: boolean;
  buttons: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnMask?: boolean
}

const sc = scopedClassMaker('ui-dialog');

const Dialog: React.FunctionComponent<IProps> = (props) => {
  const handleClose:React.MouseEventHandler = (e) => {
    props.onClose(e)
  };

  //传送门
  const dialogPortal = props.visible ?
    <Fragment>
      <div
        className={sc('mask')}
        onClick={(e) => {props.closeOnMask && props.onClose(e)}}></div>
      <div className={sc()}>
        <div
          className={sc('close')}
          onClick={handleClose}>
          <Icon name="close"></Icon>
        </div>
        <header className={sc('header')}>notice</header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {props.buttons.map((entry, idx) =>
            React.cloneElement(entry, {key: idx})
          )}
        </footer>
      </div>
    </Fragment>
    :
    null;

  return (
    ReactDOM.createPortal(dialogPortal, document.body)
  )
};

Dialog.defaultProps = {
  closeOnMask: false
};


export default Dialog