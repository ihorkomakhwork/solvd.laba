export const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftPart = arr.slice(0, middle);
  const rightPart = arr.slice(middle);
  return merge(mergeSort(leftPart), mergeSort(rightPart));
}; 

 const merge = (leftPart: number[]  , rightPart: number[]): number[] => {
  const result: number[] = [];
  while (leftPart.length && rightPart.length) {
    if (leftPart[0] <= rightPart[0]) {
      result.push(leftPart.shift() as number);
    } else {
      result.push(rightPart.shift() as number);
    }
  }
  while (leftPart.length) {
    result.push(leftPart.shift() as number);
  } 
  while (rightPart.length) {
    result.push(rightPart.shift() as number);
  }
  return result;
};
