"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quiqSort = void 0;
const quiqSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter((value) => value < middle);
    const greater = arr.filter((value) => value > middle);
    return (0, exports.quiqSort)(less).concat(middle, (0, exports.quiqSort)(greater));
};
exports.quiqSort = quiqSort;
//# sourceMappingURL=quiqSort.js.map