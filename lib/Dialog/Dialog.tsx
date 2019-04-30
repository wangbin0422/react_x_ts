import React, {Fragment, ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import {scopedClassMaker} from '../untils/classes';

import {Icon} from '../index'
import './dialog.scss'
import Button from '../Button/Button';

interface IProps {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnMask?: boolean;
  unableMask?: boolean
}

const sc = scopedClassMaker('ui-dialog');

const Dialog: React.FunctionComponent<IProps> = (props) => {
  const handleClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  };

  //传送门
  const dialogPortal = props.visible && props.unableMask ?
    <Fragment>
      <div
        className={sc('mask')}
        onClick={(e) => {
          props.closeOnMask && props.onClose(e)
        }}></div>
      <div className={sc('')}>
        <div
          className={sc('close')}
          onClick={handleClose}>
          <Icon name="close"></Icon>
        </div>
        <header className={sc('header')}>notice</header>
        <main className={sc('main')}>
          {props.children}
        </main>
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={sc('footer')}>
            {props.buttons && props.buttons.map((entry, idx) =>
              React.cloneElement(entry, {key: idx})
            )}
          </footer>
        }
      </div>
    </Fragment>
    :
    null;

  return (
    ReactDOM.createPortal(dialogPortal, document.body)
  )
};

Dialog.defaultProps = {
  closeOnMask: false,
  unableMask: true
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, close?: () => void) => {
  const component = (
    <Dialog
      visible={true}
      onClose={() => {
        handleClose();
        close && close()
      }}
      buttons={buttons}>
      {content}
    </Dialog>
  );
  const _div = document.createElement('div');  //做dialog组件容器
  document.body.append(_div);
  ReactDOM.render(component, _div);

  const handleClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), _div);
    ReactDOM.unmountComponentAtNode(_div);
    _div.remove();
  };
  return handleClose  //闭包传值
};

const alert = (content: string) => {
  const buttons = [<Button level="primary" onClick={() => close()}>ok</Button>];
  const close = modal(content, buttons);
};

const confirm = (content: string, onYes?: () => void, onNo?: () => void) => {
  const handleYes = () => {
    close();
    onYes && onYes()
  };
  const handleNo = () => {
    close();
    onNo && onNo()
  };
  const buttons = [
    <Button
      level="primary"
      onClick={handleYes}>yes</Button>,
    <Button onClick={handleNo}>no</Button>
  ];

  const close = modal(content, buttons, handleNo);
};

export {modal, alert, confirm}

export default Dialog