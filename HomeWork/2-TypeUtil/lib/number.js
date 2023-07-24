'use strict';

const { validateType } = require('./validation.js');

const convertToNumber = value => {
    const type = typeof value;
    const valid = validateType(type, ['string', 'number' ,'boolean']);
    if (!valid) throw new Error('Invalid type of argument'); 
    if (type == 'string') return parseInt(value);
    if (type == 'boolean') return value ? 1 : 0;
    return value;
};

module.exports = { convertToNumber };