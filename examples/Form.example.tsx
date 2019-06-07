import React, {useState, Fragment} from 'react';
import Form, {FormValue, FormField, ErrorMessage} from './../lib/Form/Form';
import Vaildator, {noErrors} from '../lib/Form/validator';
import Button from '../lib/Button/Button';

export default function () {
  const name = ['wang', 'mio', 'jessie'];
  const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
    setTimeout(() => {
      if (name.indexOf(username) >= 0) {
        fail();
      } else {
        succeed();
      }
    }, 2000);
  };
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });

  const [fields] = useState<FormField[]>([
    {name: 'username', label: '用户名', labelWidth: 3, input: {type: 'text'}},
    {name: 'password', label: '密码', labelWidth: 3, input: {type: 'password'}}
  ]);

  const validateor = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('unique'));
    });
  };

  const [errors, setErrors] = useState({});

  const rules = [
    {key: 'username', required: true},
    {key: 'username', minLength: 6, maxLength: 16},
    {key: 'username', pattern: /^[A-Za-z0-9]+$/},
    {key: 'username', validateor},
    {key: 'password', required: true},
    // {key: 'password', validateor}
  ];
  const transformError = (message: string) => {
    const dict: ErrorMessage = {
      unique: '用户名已存在'
    };
    return dict[message];
  };
  const handleSubmit = () => {
    Vaildator(formData, rules, (errors) => {
      if (noErrors(errors)) {
        setErrors({});
        console.log(formData);
      } else {
        setErrors(errors);
      }
    });

  };
  const onChange = (formData: FormValue) => {
    setFormData(formData);
    // Vaildator(formData, rules, (errors) => {
    //   if (noErrors(errors)) {
    //     console.log(formData);
    //     setErrors({});
    //   } else {
    //     // console.log(errors);
    //     setErrors(errors);
    //   }
    // });
  };

  return (
    <div>
      <h2>示例1</h2>
      <div style={{padding: '8px 0'}}>
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
          errors={errors}
          transformError={transformError}>
        </Form>
      </div>
      <br/>
      <h2>示例2</h2>
      <div style={{padding: '8px 0'}}>
        <Form
          layout="vertical"
          value={formData}
          fields={fields}
          onSubmit={handleSubmit}
          onChange={onChange}
          buttons={
            <Fragment>
              <Button type="submit" level="primary">提交</Button>
            </Fragment>
          }
          errors={errors}
          transformError={transformError}>
        </Form>
      </div>
    </div>
  );
}