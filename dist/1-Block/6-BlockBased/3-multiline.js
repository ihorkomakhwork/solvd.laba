"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiline = void 0;
const multiline = (tamplate) => {
    const [str] = tamplate;
    const lines = str.split('\n');
    lines.shift();
    const result = lines.map((line, index) => `${index + 1} ${line}`).join('\n');
    return result;
};
exports.multiline = multiline;
//# sourceMappingURL=3-multiline.js.map