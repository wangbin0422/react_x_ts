import React, {useState, Fragment} from 'react';
import Form, {FormValue} from './../lib/Form/Form';
import Vaildator, {noErrors} from '../lib/Form/validator';

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}
  ]);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true}
    ];
    const errors = Vaildator(formData, rules);
    if(noErrors(errors)) {
      // no error
    } else {
      setErrors(errors);
    }
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
        }
        errors={errors}/>
    </div>

  );
}