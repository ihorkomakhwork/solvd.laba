const customShuffle = array => {
  const result = [...array];
  const base = result.length -1;
  for (let i = base; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1)); 
    
    [result[i], result[random]] = [result[random], result[i]]; 
  }
  return result;
}


module.exports = { customShuffle };