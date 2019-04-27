import React, {ReactFragment} from 'react';

export interface FormValue {
  [K: string]: any
}

interface IProps {
  value: FormValue;
  fields: Array<{ name: string, label: string, input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void
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
    console.log(newFormVal);
  };
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map((entry, idx) =>
        <div key={idx}>
          {entry.label}
          <input
            type={entry.input.type}
            value={formData[entry.name]}
            name={entry.name}
          // onChange={(e) => onInputChange(entry.name, e.target.value)}/>
          onChange={onInputChange.bind(null, entry.name)}/>
        </div>
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  );
};

export default Form;