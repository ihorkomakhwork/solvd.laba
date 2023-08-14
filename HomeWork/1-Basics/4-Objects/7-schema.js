const  { isEqualType } = require('../2-TypeUtil');

const defineSchema = (schema) => {
    return obj => {
        const keys = Object.getOwnPropertyNames(obj);
        for (let key of keys) {
            const value =  obj[key]; 
            const schemaType = schema[key];
            if (!schemaType || !value) return false;
            const equal = isEqualType(schemaType, value); 
            if (!equal) return false;
        }
        return true;
    }; 
}; 

const schema = {
    name: 'string',
    age: 'number',
    address: 'object',
    cars: 'array',
};

const validate = defineSchema(schema);
const person1 = {
    name: 'John',
    age: 30,
    address: {
        city: 'London',
        country: 'England',
        street: 'Baker Street',
    },
    cars: ['Ferrari 458', 'BMW X6'],
}

const person2 = {
    name: 1010111000,
    age: '30',
    address: {}
};

const result1 = validate(person1); // true
const result2 = validate(person2); // false