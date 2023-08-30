"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_taggedTamplates_1 = require("./1-taggedTamplates");
const _6_crrying_1 = require("./6-crrying");
const _3_multiline_1 = require("./3-multiline");
const _2_highlited_1 = require("./2-highlited");
const HEADER_COLOR = '\x1b[1;33m';
const NORMAL_COLOR = '\x1b[1;37m';
const log = (message) => {
    console.log(HEADER_COLOR);
    console.log(`==============  ${message}  ==============`);
    console.log(NORMAL_COLOR);
};
{
    log('Tagged Templates');
    const translation = {
        en: {
            greet: 'Hello',
            intro: 'Welcome to our website'
        },
        fr: {
            greet: 'Bonjour',
            intro: 'Bienvenue sur notre site web'
        }
    };
    const fr = 'fr';
    const en = 'en';
    const greeting = 'greet';
    const introduction = 'intro';
    const toFr = (0, _1_taggedTamplates_1.localize)(translation, fr);
    const toEn = (0, _1_taggedTamplates_1.localize)(translation, en);
    console.log(toFr `${greeting}! ${introduction}`);
    console.log(toEn `${greeting}! ${introduction}`);
}
{
    log('Highlight Keywords');
    const keywords = ['JavaScript', 'template', 'tagged'];
    const template = 'Learn ${1} tagged templates to create custom ${1} literals for ${2} manipulation.';
    const highlighted = (0, _2_highlited_1.highlightKeywords)(template, keywords);
    console.log(highlighted);
}
{
    log('Multiline');
    const code = (0, _3_multiline_1.multiline) `
  function add(a, b) {
  return a + b;
  }`;
    console.log(code);
}
{
    log('Currying');
    const multiply = (a, b, c) => a * b * c;
    const curriedMultiply = (0, _6_crrying_1.curry)(multiply, 3);
    const result = curriedMultiply(2, 3, 4);
    console.log('Result:', result); // Expected: 24
}
//# sourceMappingURL=test.js.map