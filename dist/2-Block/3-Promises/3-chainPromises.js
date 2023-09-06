"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainPromises = void 0;
const chainPromises = (promises) => {
    let promiseChain = Promise.resolve();
    promises.forEach((func) => promiseChain = promiseChain.then(func));
    return promiseChain;
};
exports.chainPromises = chainPromises;
//# sourceMappingURL=3-chainPromises.js.map