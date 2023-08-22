/* eslint-disable no-prototype-builtins */
'use strict';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  email: 'john.doe@example.com',
  updateInfo(newInfo) {
    for (const key in newInfo) {
      const descriptor = Object.getOwnPropertyDescriptor(this, key);
      if (!this.hasOwnProperty(key))
        throw new Error(`The property ${key} does not exist.`);
      if (!descriptor.writable) throw new Error(`The property ${key} is not writable.`);
      Object.defineProperty(this, key, {
        value: newInfo[key],
        writable: false,
      });
    }
  },
};

Object.keys(person).forEach(property => {
  Object.defineProperty(person, property, {
    value: person[property],
    writable: false,
  });
});

Object.defineProperty(person, 'address', {
  value: {},
  writable: true,
  enumerable: false,
  configurable: false,
});

module.exports = { person };
