"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const localize = (translation, language) => (template, ...args) => {
    const sentances = translation[language];
    return template.reduce((final, arg, counter) => {
        const argument = args[counter];
        const sentance = sentances[argument] ? sentances[argument] : '';
        return final += arg + sentance;
    }, '');
};
exports.localize = localize;
//# sourceMappingURL=1-taggedTamplates.js.map