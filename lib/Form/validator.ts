import {FormValue} from './Form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp
}

type FormRules = Array<FormRule>

interface FormErrors {
  [K: string]: string[]
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noErrors(errors: any) {
  return Object.keys(errors).length === 0
}

const Vaildator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const errorsList = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map(rules => {
    const _value = formValue[rules.key];
    if (rules.required && isEmpty(_value)) {
      errorsList(rules.key, 'required');
    }
    if (rules.minLength && !isEmpty(_value) && _value!.length < rules.minLength) {
      errorsList(rules.key, 'short');
    }
    if (rules.maxLength && !isEmpty(_value) && _value!.length > rules.maxLength) {
      errorsList(rules.key, 'long');
    }
    if (rules.pattern && !rules.pattern.test(_value)) {
      errorsList(rules.key, 'RegExp');
    }
  });
  return errors;
};

export default Vaildator;