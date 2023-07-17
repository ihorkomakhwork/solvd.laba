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
}

const minus = (num1, num2) => {
  let result = '';
  let borrow = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    let diff = digit1 - borrow - digit2;

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
 
const multiply = (num1, num2) => {
    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);
  
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        const product = parseInt(num1[i]) * parseInt(num2[j]);
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


const divide = (str1, str2) => {
  let result = "";
  let remainder = 0;
  let i = 0;
  while (i < str1.length) {
      let dividend = remainder * 10 + parseInt(str1[i]);
      let quotient = Math.floor(dividend / str2);
      remainder = dividend % str2;
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