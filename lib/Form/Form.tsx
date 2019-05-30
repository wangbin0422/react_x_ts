import React, {ReactFragment} from 'react';
import {scopedClassMaker} from '../untils/classes';
import Input from '../Input/Input'
import './form.scss'

export interface FormValue {
  [K: string]: any
}

const sc = scopedClassMaker('ui-form');

interface IProps {
  layout?: 'vertical' | 'horizontal' | 'inline';
  value: FormValue;
  // fields: Array<{ name: string, label: string,labelWidth: string, input: { type: string} }>;
  fields: FormField[];
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]};
  transformError?: (message: string) => string
}

interface FormFieldDefaultRender {
  type: 'text' | 'textarea' | 'number' | 'password';
}

export interface FormField {
  name: string;
  label: string;
  labelWidth?: number;
  input: FormFieldDefaultRender
}

export interface ErrorMessage {
  [key: string]: string
}

const Form: React.FunctionComponent<IProps> = (props) => {
  const formData  = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormVal = {...formData, [name]: e.target.value};
    props.onChange(newFormVal);
  };
  const transformError = (message: string) => {
    const dict: ErrorMessage = {
      required: '必填',
      minLength: '太短',
      maxLength: '太长',
      pattern: '格式错误'
    };
    return props.transformError && props.transformError(message) ||
      dict[message] || '未知错误'
  };
  const renderInput = (field: FormField) =>
    <div className={sc('input-wrapper')} key={field.name}>
      <Input
        type={field.input.type}
        value={formData[field.name]}
        name={field.name}
        // onChange={(e) => onInputChange(entry.name, e.target.value)}/>
        onChange={onInputChange.bind(null, field.name)}/>
    </div>;

  const verticalLayout = <div>
    {props.fields.map((entry, idx) =>
      <div key={idx} className={sc('row')}>
        <label className={sc('label')} style={{width: `${entry.labelWidth}em`}}>{entry.label}</label>
        {renderInput(entry)}
        {
          (props.errors[entry.name]) ?
            <div className={sc('error')}>
              <span>{transformError!(props.errors[entry.name][0])}</span>
            </div>
            :
            null
        }
      </div>
    )}
    <div>
      {props.buttons}
    </div>
  </div>;

  const horizontalLayout = (
    <table className={sc('table')}>
      <tbody>
      {props.fields.map((entry, idx) =>
        <tr key={idx} className={sc('tr')}>
          <td className={sc('td')}>
            <div className={sc('label')}>{entry.label}</div>
          </td>
          <td className={sc('td')}>
            {renderInput(entry)}
          </td>
          <td className={sc('td')}>
            {props.errors[entry.name] ?
              <div className={sc('error')}>{transformError(props.errors[entry.name][0])}</div>
              :
              null
            }
          </td>
        </tr>
      )}
        <tr>
          <td className={sc('td')}></td>
          <td className={sc('td')} colSpan={2}>
            <div>
              {props.buttons}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      <form onSubmit={onSubmit} className={sc('')}>
        {props.layout === 'horizontal' ?
          horizontalLayout :
          verticalLayout
        }
      </form>

    </div>
  );
};
Form.defaultProps = {
  layout: 'horizontal',
};
export default Form;