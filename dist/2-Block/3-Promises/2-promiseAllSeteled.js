"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseAllSettled = void 0;
const promiseAllSettled = (promises) => {
    return new Promise(resolve => {
        const result = [];
        promises.forEach((promise, counter) => {
            promise.then((res) => {
                result[counter] = { status: "resolved", value: res };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            }).catch((err) => {
                result[counter] = { status: "rejected", reason: err };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            });
        });
    });
};
exports.promiseAllSettled = promiseAllSettled;
//# sourceMappingURL=2-promiseAllSeteled.js.map