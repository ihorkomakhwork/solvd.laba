'use strict';

const plus = (argA, argB) => {
  let result = '';
  let carry = 0;
  let i = argA.length - 1;
  let j = argB.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {

    const digitA = i >= 0 ? parseInt(argA[i]) : 0;
    const digitB = j >= 0 ? parseInt(argB[j]) : 0;
    const sum = digitA + digitB + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);

    i--;
    j--;
  }
  return result;
};

const minus = (argA, argB) => {
  let result = '';
  let borrow = 0;
  let i = argA.length - 1;
  let j = argB.length - 1;

  while (i >= 0 || j >= 0) {
    const digitA = i >= 0 ? parseInt(argA[i]) : 0;
    const digitB = j >= 0 ? parseInt(argB[j]) : 0;

    let diff = digitA - borrow - digitB;

    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }

    result = diff + result;
    i--;
    j--;
  }
  result = result.replace(/^0+/, '');
  return result || '0';
};

const multiply = (argA, argB) => {
  const m = argA.length;
  const n = argB.length;
  const result = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const product = parseInt(argA[i]) * parseInt(argB[j]);
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = product + result[p2];

      result[p1] += Math.floor(sum / 10);
      result[p2] = sum % 10;
    }
  }

  while (result.length > 1 && result[0] === 0) {
    result.shift();
  }

  return result.join('');
};


const divide = (argA, argB) => {
  let result = '';
  let remainder = 0;
  let i = 0;
  while (i < argA.length) {
    const dividend = remainder * 10 + parseInt(argA[i]);
    const quotient = Math.floor(dividend / argB);
    remainder = dividend % argB;
    result += quotient;
    i++;
  }
  result = result.replace(/^0+/, '');
  return result || '0';
};

module.exports = {
  plus,
  minus,
  multiply,
  divide,
};
