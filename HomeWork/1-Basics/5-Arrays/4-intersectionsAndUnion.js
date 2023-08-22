

const getArrayIntersection = (arrA, arrB) => {
  const intersection = [];
  arrA.forEach(element => {
    if (arrB.includes(element)) {
      intersection.push(element);
    }
  });
  return intersection;
};

const getArrayUnion = (arrA, arrB) => {
  const union = arrA;
  arrB.forEach(element => {
    if (!union.includes(element)) {
      union.push(element);
    }
  });
  return [...new Set(union)];
};

exports.module = { getArrayIntersection, getArrayUnion };
