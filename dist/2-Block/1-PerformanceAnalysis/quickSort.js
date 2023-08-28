"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter((value) => value < middle);
    const greater = arr.filter((value) => value > middle);
    return (0, exports.quickSort)(less).concat(middle, (0, exports.quickSort)(greater));
};
exports.quickSort = quickSort;
//# sourceMappingURL=quickSort.js.map