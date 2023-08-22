'use strict';

const calculateFactorial = (num, acc = 1) => {
  if (num === 0 || num === 1) {
    return acc;
  } else {
    return calculateFactorial(num - 1, num * acc);
  }
};

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};

module.exports = { calculateFactorial, power };
