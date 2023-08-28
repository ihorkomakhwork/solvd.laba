"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandom = exports.generateDescending = exports.generateAccesing = void 0;
const generateAccesing = (length) => {
    const result = [];
    for (let i = 1; i < length; i++) {
        result.push(i);
    }
    return result;
};
exports.generateAccesing = generateAccesing;
const generateDescending = (length) => (0, exports.generateAccesing)(length).reverse();
exports.generateDescending = generateDescending;
const generateRandom = (length) => {
    const result = [];
    for (let i = 1; i < length; i++) {
        const random = Math.floor(Math.random() * length);
        result.push(random);
    }
    return result;
};
exports.generateRandom = generateRandom;
//# sourceMappingURL=range.js.map