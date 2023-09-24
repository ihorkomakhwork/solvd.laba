"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
const sleep = (msec) => {
    const end = new Date().getTime() + msec;
    while (new Date().getTime() < end)
        ;
};
exports.sleep = sleep;
//# sourceMappingURL=util.js.map