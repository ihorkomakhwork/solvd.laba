"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAll = void 0;
const promiseAll = (promises) => new Promise((resolve, reject) => {
    promises.reduce((acc, promise) => {
        return promise.then(value => {
            return acc.then(state => {
                return [...state, value];
            });
        }).catch(error => reject(error));
    }, Promise.resolve([]))
        .then(finall => resolve(finall));
});
exports.promiseAll = promiseAll;
//# sourceMappingURL=1-promiseAll.js.map