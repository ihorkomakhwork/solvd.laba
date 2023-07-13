class Calculator{
    constructor(strA, strB) {
        this.a = parseInt(strA, 10);
        this.b = parseInt(strB, 10);
    }
    
    plus() { 
        const sum = this.a + this.b;
        return sum.toString();
    }

    minus () {
        const sum = this.a - this.b;
        return sum.toString();
    
    } 
    
    divide () {
        const sum = this.a / this.b;
        return sum.toString();
    }
    
    multiply () {
        const sum = this.a * this.b;
        return sum.toString();
    } 
}

const calac = new Calculator('2', '2');

console.log(calac.plus());
console.log(calac.minus());
console.log(calac.divide());
console.log(calac.multiply());
