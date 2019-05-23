import React, {useState} from 'react';
import Input from '../lib/Input/Input';

export default function () {
  const [value, setValue] = useState('');
  const onChange = (e: React.FormEvent) => {
    setValue((e.target as HTMLInputElement).value)
  };
  return (
    <div className="InputExample">
      <h3>普通输入框</h3>
      <div style={{padding: '8px 0'}}>
        <Input value={value} onChange={onChange} placeholder="default"/>
        <Input placeholder="密码" type="password"/>
        <Input length={10} disabled={true} value={value} placeholder="disabled"/>
      </div>
      <br/>
      <h3>label输入框</h3>
      <div style={{padding: '8px 0'}}>
        <div>
          <Input value={value} onChange={onChange} label="账号"/>
        </div>
        <div>
          <Input value={value} onChange={onChange} label="账号" labelPosition="top"/>
        </div>
      </div>
      <br/>
      <h3>error输入框</h3>
      <div style={{padding: '8px 0'}}>
        <div>
          <Input
            value={value}
            onChange={onChange}
            label="账号"
            error="错误提示"
          />
        </div>
        <br/>
        <div>
          <Input
            value={value}
            onChange={onChange}
            label="账号"
            error="错误提示"
            errorPosition="bottom"
          />
        </div>
      </div>
    </div>
  )
};