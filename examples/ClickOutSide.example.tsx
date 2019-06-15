import React, {useRef, useState} from 'react';
import ClickBlank from '../lib/ClickOutSide/index';

export default function () {
  const [n, setN] = useState(0);
  const [n2, setN2] = useState(0);
  const div = useRef(null);

  return (
    <div className="">
      <h2>示例</h2>
      <ClickBlank
        handler={() => setN(n + 1)}
      >
        click次数: {n} (点击空白处 n 会增加)
      </ClickBlank>

      <h2 style={{padding: '16px 0'}}>另外示例</h2>
      <ClickBlank
        handler={() => setN2(n2 + 1)}
        exclude={div}
      >
        click次数: {n2} (点击空白处 n2 会增加)
      </ClickBlank>
      <div ref={div}>
        点击这里 n2 不会增长
      </div>
    </div>
  );
}