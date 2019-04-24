import React from 'react';
import Demo from './Demo';
import IconExample from './Icon.example'

const IconDemo = () => {
  return (
    <Demo code={require('!!raw-loader!./Icon.example').default}>
      <IconExample />
    </Demo>
  )
};

export default IconDemo;