import React, {useState} from 'react';
import Button from '../lib/Button/Button';

export default function () {
  const [state, setState] = useState({loading: false});
  return (
    <div>
      <h2>普通按钮</h2>
      <div style={{padding: '6px 0'}}>
        <Button level="default">Default</Button>
        <Button level="primary">Primary</Button>
        <Button level="danger">Danger</Button>
      </div>
      <div style={{padding: '6px 0'}}>
        <Button level="default" disabled={true}>Default</Button>
        <Button level="primary" disabled={true}>Primary</Button>
        <Button level="danger" disabled={true}>Danger</Button>
      </div>
      <h2>加载Loading</h2>
      <div style={{padding: '6px 0'}}>
        <Button
          level="primary"
          icon="wechat"
          loading={state.loading}
          onClick={() => {setState({loading: !state.loading})}}>
          Click Loading
        </Button>
      </div>
    </div>
  );
}