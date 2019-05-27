import {FormValue} from './Form';

interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validateor?: {
    name: string,
    validate: (name: string) => Promise<void>
  }
}

type FormRules = Array<FormRule>

// interface FormErrors {
//   [K: string]: string[]
// }

function isEmpty(value: any) {
  return value === undefined || value === null || value === '';
}

export function noErrors(errors: any) {
  return Object.keys(errors).length === 0;
}

interface OneError {
  message: string;
  promise?: Promise<any>
}

const Vaildator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void) => {
  let errors: any = {};
  const errorsList = (key: string, message: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };
  rules.map(rules => {
    const _value = formValue[rules.key];
    if (rules.required && isEmpty(_value)) {
      errorsList(rules.key, {message: '必填'});
    }
    if (rules.validateor) {
      const promise = rules.validateor.validate(_value);
      errorsList(rules.key, {message: '已存在', promise});
    }
    if (rules.minLength && !isEmpty(_value) && _value!.length < rules.minLength) {
      errorsList(rules.key, {message: '长度过短'});
    }
    if (rules.maxLength && !isEmpty(_value) && _value!.length > rules.maxLength) {
      errorsList(rules.key, {message: '长度过长'});
    }
    if (!isEmpty(_value) && rules.pattern && !rules.pattern.test(_value)) {
      errorsList(rules.key, {message: '信息有误'});
    }
  });
  console.log(flat(Object.values(errors)));
  const promiseList = flat(Object.values(errors))
    .filter(entry => entry.promise)
    .map(entry => entry.promise);
  Promise.all(promiseList).then(() => {
    const newErrors = fromEntries(
      Object.keys(errors).map(key =>
        [key, errors[key].map((entry: OneError) => entry.message)]
      ));
    callback(newErrors);
  }, () => {
    const newErrors = fromEntries(
      Object.keys(errors).map(key =>
        [key, errors[key].map((entry: OneError) => entry.message)]
      ));
    console.log(newErrors);
    callback(newErrors);
  });
};

function flat(array: Array<any>) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

function fromEntries(array: Array<[string, string[]]>) {
  const result: { [key: string]: string[] } = {};
  for (let i = 0; i < array.length; i++) {
    result[array[i][0]] = array[i][1];
  }
  return result;
}

export default Vaildator;