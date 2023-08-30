"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftPart = arr.slice(0, middle);
    const rightPart = arr.slice(middle);
    return merge((0, exports.mergeSort)(leftPart), (0, exports.mergeSort)(rightPart));
};
exports.mergeSort = mergeSort;
const merge = (leftPart, rightPart) => {
    const result = [];
    while (leftPart.length && rightPart.length) {
        if (leftPart[0] <= rightPart[0]) {
            result.push(leftPart.shift());
        }
        else {
            result.push(rightPart.shift());
        }
    }
    while (leftPart.length) {
        result.push(leftPart.shift());
    }
    while (rightPart.length) {
        result.push(rightPart.shift());
    }
    return result;
};
//# sourceMappingURL=mergeSort.js.map