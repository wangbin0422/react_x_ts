import React, {useState, Fragment} from 'react';
import Form, {FormValue, FormField} from './../lib/Form/Form';
import Vaildator from '../lib/Form/validator';
import Button from '../lib/Button/Button';

export default function () {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState<FormField[]>([
    {name: 'username', label: '用户名',labelWidth: 3, input: {type: 'text'}},
    {name: 'password', label: '密码',labelWidth: 3, input: {type: 'password'}}
  ]);

  const [errors, setErrors] = useState({});

  const rules = [
    {key: 'username', required: true},
    {key: 'username', minLength: 8, maxLength: 16},
    {key: 'username', pattern: /^[A-Za-z0-9]+$/},
    {key: 'password', required: true}
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const errors = Vaildator(formData, rules);
    setErrors(errors);
  };
  const onChange = (formData: FormValue) => {
    setFormData(formData);
    // const errors = Vaildator(formData, rules);
    // setErrors(errors);
  };

  return (
    <div>
      <Form
        value={formData}
        fields={fields}
        onSubmit={handleSubmit}
        onChange={onChange}
        buttons={
          <Fragment>
            <Button
              type="submit"
              level="primary">
              提交
            </Button>
          </Fragment>
        }
        errors={errors}/>
    </div>
  );
}