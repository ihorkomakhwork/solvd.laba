"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAllSettled = void 0;
const promiseAllSettled = (promises) => new Promise((resolve, reject) => {
    promises.reduce((acc, promise) => promise.then(value => {
        console.log(value);
        return acc.then(state => {
            return [...state, { status: "resolved", value: value
                }];
        });
    }).catch(error => {
        return acc.then(state => {
            return [...state, { status: "rejected", reason: error }];
        });
    }), Promise.resolve([])).then(finall => resolve(finall));
});
exports.promiseAllSettled = promiseAllSettled;
//# sourceMappingURL=2-promiseAllSeteled.js.map