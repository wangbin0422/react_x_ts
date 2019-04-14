import React, { useState } from 'react';
import Dialog, {alert} from '../lib/Dialog/Dialog';

export default function() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <div>
        <h1>example 1</h1>
        <button onClick={() => {setVisible(!visible)}}>Click</button>
        <Dialog
          visible={visible}
          buttons={
            [
              <button>ok</button>,
              <button>cancel</button>
            ]
          }
          onClose={() => {setVisible(false)}}>
          <div>hi</div>
        </Dialog>
      </div>
      <div>
        <h1>example 2</h1>
        <button onClick={() => alert('wang')}>alert</button>
      </div>
    </div>
  )
}