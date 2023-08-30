"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightKeywords = void 0;
const TAMPLATE_REGEXP = /\${(\d+)}/g;
const INT_REGEXP = /\d+/;
const HIGHLIGT_OPEN = '<span class=\'highlight\'>';
const HIGHLIGT_CLOSE = '</span>';
const highlightKeywords = (tamplate, args) => {
    const tampl = tamplate.match(TAMPLATE_REGEXP);
    if (!tampl)
        return tamplate;
    tampl.forEach((element) => {
        const [match] = element.match(INT_REGEXP);
        if (match)
            tamplate = tamplate.replace(element, `${HIGHLIGT_OPEN}${args[match]}${HIGHLIGT_CLOSE}`);
    });
    return tamplate;
};
exports.highlightKeywords = highlightKeywords;
//# sourceMappingURL=2-highlited.js.map