export type GenerateRow  = (length: number) => number[] 

export const generateAccesing: GenerateRow = (length) => {
    const result: number[] = [];
    for (let i = 1; i < length; i++) {
        result.push(i);
    }
    return result;
};

export const generateDescending: GenerateRow = (length) => generateAccesing(length).reverse();

export const generateRandom: GenerateRow = (length) => {
    const result: number[] = [];
    for (let i = 1; i < length; i++) {
        const random = Math.floor(Math.random() * length);
        result.push(random);
    }
    return result;
};