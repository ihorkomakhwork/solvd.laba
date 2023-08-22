

const observeObject = (obj, callback) => {
  const handler = {
    set(target, property, value) {
      callback(property, 'set', value);
      target[property] = value;
      return true;
    },
    get(target, property) {
      const value = target[property];
      callback(property, 'get');
      return value;
    },
  };
  return new Proxy(obj, handler);
};

const log = (property, kind, value) =>
  console.log(`${property}: \t ${kind} ${value ? value : ''}`.toUpperCase());

module.exports = { observeObject, log };
