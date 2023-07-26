'use strict';

const { convertToNumber } = require('./number.js');
const { stringifyValue } = require('./string.js');
const { validateType } = require('./validation.js');

const addValues = (argA , argB)  => {
    const validA = validateType(typeof argA,  ['string', 'number']); 
    const validB = validateType(typeof argB, ['string', 'number']);
    if (validA || validB) return argA + argB; 
    else throw new Error('Invalid type of argument');
};

const coerceToType = (value, type) => {
    const valid = validateType(type ,['string', 'number', 'boolean'])
    if (!valid) throw new Error('Invalid type of argument'); 
    try {
    if (type == 'number') return convertToNumber(value);
    if (type == 'boolean') return Boolean(value);
    if (type == 'string') return stringifyValue(value);
    } catch (error) { 
       throw Error('Impossible to correct', error); 
    };

};

module.exports = { addValues, coerceToType };   