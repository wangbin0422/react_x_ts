import {FormValue} from './Form';
interface FormRule {
  key: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  validateor?: (value: string) => Promise<string>
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

type OneError = string | Promise<string>

const Vaildator = (formValue: FormValue, rules: FormRules, callback: (errors: any) => void) => {
  let errors: any = {};
  const errorsList = (key: string, error: OneError) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(error);
  };
  rules.map(rules => {
    const _value = formValue[rules.key];
    if (rules.required && isEmpty(_value)) {
      errorsList(rules.key,'required');
    }
    if (rules.minLength && !isEmpty(_value) && _value!.length < rules.minLength) {
      errorsList(rules.key,'minLength');
    }
    if (rules.maxLength && !isEmpty(_value) && _value!.length > rules.maxLength) {
      errorsList(rules.key,'maxLength');
    }
    if (!isEmpty(_value) && rules.pattern && !rules.pattern.test(_value)) {
      errorsList(rules.key,'pattern');
    }
    if (rules.validateor) {
      const promise = rules.validateor(_value);
      errorsList(rules.key,promise);
    }
  });
  const x = Object.keys(errors).map(key =>
    errors[key].map((promise: any) => [key, promise])
  );
  const y = flat(x);
  console.log(y);

  const z = y.map(([key, promiseOrStr]) => (
    promiseOrStr instanceof Promise ? promiseOrStr : Promise.reject(promiseOrStr)
  ).then(() => {
    return [key, undefined];
  }, (reason: any) => {
    return [key, reason];
  }));
  console.log(z);
  Promise.all(z).then((res: Array<[string, string[]]>) => {
    callback(zip(res.filter(entry => entry[1])))
  });
};

//kvList: [['username': 'e1'], ['password': 'e2']]
function zip(kvList:Array<[string, string[]]>) {
  const result: any = {};
  kvList.map(([key, value]) => {
    // kv: ['username': 'e1']
    result[key] = result[key] || [];
    result[key].push(value);
  });
  return result;
}

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

//
// function fromEntries(array: Array<[string, string[]]>) {
//   const result: { [key: string]: string[] } = {};
//   for (let i = 0; i < array.length; i++) {
//     result[array[i][0]] = array[i][1];
//   }
//   return result;
// }

export default Vaildator;