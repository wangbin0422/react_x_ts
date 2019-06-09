import React, { useState } from 'react';
import Dialog, {alert, confirm, modal} from '../lib/Dialog/Dialog'
import Button from '../lib/Button/Button';

export default function() {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    const close =
      modal(<div>
              <h1>hi</h1>
              <Button
                onClick={() => close()}>
                close
              </Button>
            </div>);
  };

  return (
    <div>
      <div>
        <h1>example 1</h1>
        <Button onClick={() => {setVisible(!visible)}}>Click</Button>
        <Dialog
          visible={visible}
          buttons={
            [
              <Button
                level="primary"
                onClick={() => setVisible(false)}>ok</Button>,
              <Button onClick={() => setVisible(false)}>cancel</Button>
            ]
          }
          onClose={() => {setVisible(false)}}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <Button onClick={() => alert('alert')}>alert</Button>
        <Button
          onClick={() => confirm(
            'confirm',
            () => {window.alert('yes')},
            () => {window.alert('no')})}>
          confirm
        </Button>
      </div>
      <div>
        <h1>example 3</h1>
        <Button onClick={openModal}>modal</Button>
      </div>
    </div>
  )
}