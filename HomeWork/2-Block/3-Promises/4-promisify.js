"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promisify = void 0;
const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
    args.push((err, res) => {
        if (err)
            reject(err);
        else
            resolve(res);
    });
    fn(...args);
});
exports.promisify = promisify;
//# sourceMappingURL=4-promisify.js.map