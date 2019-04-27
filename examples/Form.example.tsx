import React, {useState, Fragment} from 'react';
import Form, {FormValue} from './../lib/Form/Form';

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };

  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        onSubmit={handleSubmit}
        onChange={(formData) => setFormData(formData)}
        buttons={
          <Fragment>
            <button type="submit">提交</button>
            <button>返回</button>
          </Fragment>
        }/>
    </div>

  );
}