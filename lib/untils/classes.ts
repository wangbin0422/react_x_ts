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
  return function scopedClass(name: string | ClassToggles, options?: Options) {
    const _name = (typeof name === 'string' || name === undefined) ?
      {[name]: name} :
      name;
    const scoped = Object
      .entries(_name)
      .filter(entry => entry[1] !== false)
      .map(entry => entry[0])
      .map(entry =>
        [prefix, entry].filter(Boolean).join('-')
      ).join(' ');

    if (options && options.extra) {
      return [scoped, options && options.extra].filter(Boolean).join(' ');
    } else {
      return scoped;
    }
  };
}

export {scopedClassMaker};

