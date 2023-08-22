'use strict';

const { linkedTypeOf } = require('../2-TypeUtil');

const objectDeepCloning = inputObject => {
  const visited = new WeakMap();

  const clone = input => {
    let output;
    const type = linkedTypeOf(input);
    if (visited.has(input)) return visited.get(input);
    if (type === 'array') {
      output = [];
      visited.set(input, output);
      for (const value of input) {
        const result = clone(value);
        output.push(result);
      }
    } else if (type === 'object') {
      output = {};
      visited.set(input, output);
      const keys = Object.getOwnPropertyNames(input);
      for (const key of keys) {
        const value = input[key];
        const result = clone(value);
        output[key] = result;
      }
    } else return input;
    return output;
  };
  return clone(inputObject);
};

module.exports = { objectDeepCloning };
