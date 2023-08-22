

const chunkArray = (array, chunkSize) => {
  const result = [];
  let chunk = [];
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === chunkSize || i === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }
  }
  return result;
};

module.exports = { chunkArray };
