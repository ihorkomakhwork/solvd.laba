'use strict';

const { isEqualType } = require('../2-TypeUtil');

const defineSchema = schema => obj => {
  const keys = Object.getOwnPropertyNames(obj);
  for (const key of keys) {
    const value = obj[key];
    const schemaType = schema[key];
    if (!schemaType || !value) return false;
    const equal = isEqualType(schemaType, value);
    if (!equal) return false;
  }
  return true;
};

const schema = {
  name: 'string',
  age: 'number',
  address: 'object',
  cars: 'array',
};

module.exports = { defineSchema, schema };
