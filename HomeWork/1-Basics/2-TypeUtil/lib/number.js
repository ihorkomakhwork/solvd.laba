

const { validateType } = require('./validation.js');

const convertToNumber = value => {
  const type = typeof value;
  const valid = validateType(type, ['string', 'number']);
  if (!valid) throw new Error('Invalid type of argument');
  if (type === 'string') return parseInt(value);
  return value;
};

module.exports = { convertToNumber };
