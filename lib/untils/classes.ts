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

const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) => {
    return Object
      .entries(name instanceof Object ? name : {[name]: name})
      .filter(entry => entry[1] !== false)
      .map(entry => entry[0])
      .map(entry => [prefix, entry]
        .filter(Boolean)
        .join('-'))
      .concat(options && options.extra || [])
      .join(' ');
  };

export {scopedClassMaker};

