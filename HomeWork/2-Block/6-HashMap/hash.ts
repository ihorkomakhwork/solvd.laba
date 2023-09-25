import crypto from 'node:crypto';

export interface FHash {
    (key: any): number;
};

// simple sum of ascii codes of all chars in key
export const sum: FHash = (key) => {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
        sum += key.charCodeAt(i);
    };
    // definiton to 32 bit 
    return sum % Math.pow(2, 32);
};

// binomial hash function with prime number
// we calculate it by formula ...a0 + a1 * l + a2 * k^2 
// where a = ascii codes of chars in key
export const binomial = (prime): FHash => (key) => {
    let hash = 0;  

    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i);
      const binomialCoefficient = coefficient(key.length - 1, i);
      hash += charCode * binomialCoefficient;
    }
  
    return hash % prime % Math.pow(2, 32);
  }
// coefficient k calculated by formula  a2 * x^2 + a1 * x + a0 
const  coefficient = (n, a) => {
    if (a === 0 || a === n) {
      return 1;
    }
  
    let result = 1;
    for (let i = 1; i <= a; i++) {
      result *= (n - i + 1) / i;
    }
  
    return Math.floor(result);
}
// helper function to convert hex to int64
const int64 = (hex) => Number(BigInt(`0x${hex}`) % BigInt(Math.pow(2,32)))  

// modern sha256 algorithm 
export const sha256: FHash = (key) =>  { 
    const hex = crypto.createHash('sha256').update(key).digest('hex');
    return int64(hex);                                            
}

