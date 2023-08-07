const person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 30,
    email: "john.doe@example.com",
    updateInfo(newInfo) {
        for(let key in newInfo) {
            if(!this.hasOwnProperty(key)) throw new Error(`The property ${key} does not exist.`);
            Object.defineProperty(this, key, { value: newInfo[key], writable: false });       
        }
    }
};

Object.keys(person).forEach((property) => {
  Object.defineProperty(person, property, {
    value: person[property],
    writable: false
  });
});


Object.defineProperty(person, "address", {
  value: {},
  writable: true, 
  enumerable: false,
  configurable: false,
});


module.exports = { person };