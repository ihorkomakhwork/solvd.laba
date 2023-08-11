const { immutablePerson } = require('./4-advancedDescriptors.js');
const { linkedTypeOf } = require('../2-TypeUtil');

immutablePerson.person = immutablePerson;

const objectDeepCloning = (inputObject) => {
    const visited = new WeakMap();    
        
        const clone = (input) => {
            let output; 
            const type = linkedTypeOf(input);
            if (visited.has(input)) return visited.get(input);
            if (type == 'array') {
                output = [];
                visited.set(input, output);
                for (let value of input) {;
                    const result = clone(value);
                    output.push(result);
                };
                
            } else if (type == 'object') {
                output = {};
                visited.set(input, output);
                const keys = Object.getOwnPropertyNames(input);
                for (let key of keys) {
                    const value = input[key]; 
                    const result = clone(value);
                    output[key] = result;
                }
            } else return input; 
            return output;  
        };
    return clone(inputObject);
};

const clonedPerson = objectDeepCloning(immutablePerson);

module.exports = { objectDeepCloning };
