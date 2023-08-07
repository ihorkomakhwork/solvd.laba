const { person } = require('./1-propertyManipulation.js');

const observeObject = (obj, callback) => {
    const handler = {
        set(target, property, value) {
            callback(property, 'set', value);
            target[property] = value;
            return true;
        },
        get(target, property) {
            const value = target[property];
            callback(property, 'get');
            return value;
        }
    }
    return new Proxy(obj, handler);
};

const log = (property, kind, value ) => console.log(`${property}: \t ${kind} ${value ? value : '' }`.toUpperCase() );

const observedPerson = observeObject(person, log);
observedPerson.updateInfo({ age: 31, email: 'dscsdcsdc@sdsdcsdc.com' });
observedPerson.updateInfo({ age: 50, firstName: 'Jhane' });
observedPerson.children = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 10,
    }
];

observedPerson.car = 'Ferrari 458';
const name  = observedPerson.firstName;
const address = observedPerson.address;
