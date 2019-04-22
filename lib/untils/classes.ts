const classes = (...names: (string | undefined)[]) => {
  return names.filter(Boolean).join(' ');
};

export {classes};

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

function scopedClassMaker(prefix: string) {
  return function scopedClass(name?: string | ClassToggles, options?: Options) {
    let _name;
    let result;
    if (typeof name === 'string' || name === undefined) {
      _name = name;
      result = [prefix, _name].filter(Boolean).join('-');
    } else {
      _name = Object.entries(name).filter(entry => entry[1]).map(entry => entry[0]);
      result = _name.map(entry => [prefix, entry].filter(Boolean).join('-')).join(' ');
    }
    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  };
}

export {scopedClassMaker};

