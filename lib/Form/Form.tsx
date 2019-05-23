import React, {ReactFragment} from 'react';
import {scopedClassMaker} from '../untils/classes';
import './form.scss'

export interface FormValue {
  [K: string]: any
}

const sc = scopedClassMaker('ui-form');

interface IProps {
  value: FormValue;
  fields: Array<{ name: string, label: string,labelWidth: string, input: { type: string} }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]}
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
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((entry, idx) =>
        <div key={idx} className={sc('row')}>
          <label className={sc('label')} style={{width: entry.labelWidth}}>{entry.label}</label>
          <input
            type={entry.input.type}
            value={formData[entry.name]}
            name={entry.name}
            // onChange={(e) => onInputChange(entry.name, e.target.value)}/>
            onChange={onInputChange.bind(null, entry.name)}/>

            {
              props.errors[entry.name] &&
              <div className={sc('error')}>
                {props.errors[entry.name]}
              </div>
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