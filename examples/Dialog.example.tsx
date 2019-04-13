import React, { useState } from 'react';
import Dialog from '../lib/Dialog/Dialog';

export default function() {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => {setVisible(!visible)}}>Click</button>
      <Dialog visible={visible}>
        <div>hi</div>
      </Dialog>
    </div>
  )
}