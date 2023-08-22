'use strict';

const { person } = require('./1-propertyManipulation.js');
const { linkedTypeOf } = require('../2-TypeUtil');

const IMMUTABLE_OPTIONS = {
  writable: false,
  configurable: false,
};

const createImmutableObject = input => {
  let output;
  const type = linkedTypeOf(input);
  if (type === 'array') {
    output = [];
    for (const value of input) {
      const immutableObject = createImmutableObject(value);
      output.push(immutableObject);
    }
  } else if (type === 'object') {
    output = {};
    const keys = Object.getOwnPropertyNames(input);
    for (const key of keys) {
      const value = input[key];
      const immutableObject = createImmutableObject(value);
      Object.defineProperty(output, key, {
        value: immutableObject,
        ...IMMUTABLE_OPTIONS,
      });
    }
  } else return input;
  return output;
};

person.address = {
  city: 'London',
  country: 'England',
  street: 'Baker Street',
  postaCodes: ['NW1 6XE', 'NW1 6XL'],
};

const immutablePerson = createImmutableObject(person);

module.exports = { immutablePerson };
