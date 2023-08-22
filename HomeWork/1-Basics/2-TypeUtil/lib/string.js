

const stringifyValue = value => {
  const type = typeof value;
  if (type === 'object') return JSON.stringify(value);
  else return value.toString();
};

module.exports = { stringifyValue };
