import React, { useState } from 'react';
import Dialog, {alert, confirm, modal} from '../lib/Dialog/Dialog'

export default function() {
  const [visible, setVisible] = useState(false);
  const openModal = () => {
    const close =
      modal(<div>
              <h1>hi</h1>
              <button onClick={() => close()}>close</button>
            </div>);
  };

  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => {setVisible(!visible)}}>Click</button>
        <Dialog
          visible={visible}
          buttons={
            [
              <button onClick={() => setVisible(false)}>ok</button>,
              <button>cancel</button>
            ]
          }
          onClose={() => {setVisible(false)}}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => alert('alert')}>alert</button>
        <button onClick={() => confirm('confirm', () => {window.alert('yes')}, () => {window.alert('no')})}>confirm</button>
      </div>
      <div>
        <h1>example 3</h1>
        <button onClick={openModal}>modal</button>
      </div>
    </div>
  )
}