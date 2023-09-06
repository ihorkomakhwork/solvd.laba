"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAllSettled = void 0;
const promiseAllSettled = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];
        let index = 0;
        promises.forEach((promise, counter) => {
            promise.then((res) => {
                result[index] = { status: "fulfilled", value: res };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            }).catch((err) => {
                result[index] = { status: "rejected", reason: err };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            });
        });
    });
};
exports.promiseAllSettled = promiseAllSettled;
//# sourceMappingURL=promiseAllSeteled.js.map