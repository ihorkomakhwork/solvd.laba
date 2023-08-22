type Curry = (fn: Function, arity: number) => (...args) => any | void;

export const curry: Curry = (fn, arity) => (...args) => {
  arity -= args.length;
  if (arity < 0) throw new Error('Too many arguments');
  if (arity === 0) return fn(...args);
  const f = fn.bind(null, ...args);
  return curry(f, arity);
};
