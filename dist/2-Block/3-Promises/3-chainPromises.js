"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainPromises = void 0;
const chainPromises = (promises) => promises
    .reduce((acc, func) => acc = acc
    .then(func)
    .catch(error => error), Promise.resolve());
exports.chainPromises = chainPromises;
//# sourceMappingURL=3-chainPromises.js.map