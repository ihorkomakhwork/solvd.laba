const { customShuffle } = require('./3-shuffing.js');
const measureArrayPerformance = (fn, array) => {
  const start = performance.now();
  const result = fn(array);
  const end = performance.now();
  const time = end - start;
  
  return { result, time };
};

const standartFilter = array => array.filter(item => item > 5);
const copyArray = array => array.map(item => item);
const sum = array => array.reduce((acc, item) => acc + item, 0);

console.log(measureArrayPerformance(standartFilter, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(measureArrayPerformance(customShuffle, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(measureArrayPerformance(copyArray, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(measureArrayPerformance(sum, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
