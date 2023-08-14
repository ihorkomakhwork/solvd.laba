'use strict';

const lazyMap = (array, fn) => {
  let index = 0;
  return () => {
    if (index < array.length) {
      const result = fn(array[index]);
      index++;
      return result;
    } else return;
  };
};

const fibonacciGenerator = () => {
  let current = 0;
  let next = 1;

  return () => {
    const result = current;
    const temp = current + next;
    current = next;
    next = temp;
    return result;
  };
};

module.exports = { lazyMap, fibonacciGenerator };
