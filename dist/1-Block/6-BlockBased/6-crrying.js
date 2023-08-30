"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
const curry = (fn, arity) => (...args) => {
    arity -= args.length;
    if (arity < 0)
        throw new Error('Too many arguments');
    if (arity === 0)
        return fn(...args);
    const f = fn.bind(null, ...args);
    return (0, exports.curry)(f, arity);
};
exports.curry = curry;
//# sourceMappingURL=6-crrying.js.map