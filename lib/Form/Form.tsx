import React, {ReactFragment} from 'react';
import {scopedClassMaker} from '../untils/classes';
import Input from '../Input/Input'
import './form.scss'

export interface FormValue {
  [K: string]: any
}

const sc = scopedClassMaker('ui-form');

interface IProps {
  value: FormValue;
  // fields: Array<{ name: string, label: string,labelWidth: string, input: { type: string} }>;
  fields: FormField[];
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]}
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
  const renderInput = (field: FormField) =>
    <div className={sc('input-wrapper')} key={field.name}>
      <Input
        type={field.input.type}
        value={formData[field.name]}
        name={field.name}
        // onChange={(e) => onInputChange(entry.name, e.target.value)}/>
        onChange={onInputChange.bind(null, field.name)}/>
    </div>;
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((entry, idx) =>
        <div key={idx} className={sc('row')}>
          <label className={sc('label')} style={{width: `${entry.labelWidth}em`}}>{entry.label}</label>
            {renderInput(entry)}
            {
              Object.keys(props.errors).length !== 0 ?
              <div className={sc('error')}>
                <span style={{marginLeft: `${entry.labelWidth!+0.5}em`}}>{props.errors[entry.name]}</span>
              </div>
              :
              null
            }
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;