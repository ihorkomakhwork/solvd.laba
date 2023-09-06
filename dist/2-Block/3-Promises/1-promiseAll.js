"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAll = void 0;
const promiseAll = (promises) => new Promise((resolve, reject) => {
    const result = [];
    let counter = 0;
    promises.forEach((promise, index) => {
        promise.then((res) => {
            result[index] = res;
            counter++;
            if (counter === promises.length)
                resolve(result);
        }).catch((err) => reject(err));
    });
});
exports.promiseAll = promiseAll;
//# sourceMappingURL=1-promiseAll.js.map