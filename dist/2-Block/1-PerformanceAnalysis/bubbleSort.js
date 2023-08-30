"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const current = arr[i];
            const next = arr[j];
            if (current > next) {
                arr[i] = next;
                arr[j] = current;
            }
        }
    }
};
exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map