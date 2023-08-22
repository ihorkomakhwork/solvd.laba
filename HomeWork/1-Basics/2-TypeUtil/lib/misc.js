

const { convertToNumber } = require('./number.js');
const { stringifyValue } = require('./string.js');
const { validateType } = require('./validation.js');

const linkedTypeOf = input => {
  const type = typeof input;
  if (type === 'object') {
    if (input === null) {
      return 'null';
    } else if (Array.isArray(input)) {
      return 'array';
    } else {
      return 'object';
    }
  } else {
    return type;
  }
};

const isEqualType = (type, value) => linkedTypeOf(value) === type;

const addValues = (argA, argB) => {
  const validA = validateType(typeof argA, ['string', 'number']);
  const validB = validateType(typeof argB, ['string', 'number']);
  if (validA || validB) return argA + argB;
  else throw new Error('Invalid type of argument');
};

const coerceToType = (value, type) => {
  try {
    if (type === 'number') return convertToNumber(value);
    if (type === 'boolean') return Boolean(value);
    if (type === 'string') return stringifyValue(value);
  } catch (error) {
    throw Error('Impossible to correct', { cause: error });
  }
  throw new Error('Invalid type of argument');
};

module.exports = { addValues, coerceToType, linkedTypeOf, isEqualType };
