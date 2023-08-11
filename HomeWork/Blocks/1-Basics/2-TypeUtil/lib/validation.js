'use strict';

const validateType = (type, allowedTypes) => allowedTypes.includes(type); 

module.exports = { validateType };