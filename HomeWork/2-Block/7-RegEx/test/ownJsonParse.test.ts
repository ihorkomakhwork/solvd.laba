import assert, { deepStrictEqual } from 'node:assert';
import { describe, it } from 'node:test';
import { JSONparse } from '../ownJsonParse';

describe('JSONparse', () => {
  it('Simple object with 1 depth', () => {
    const input = `{
        "name": "John Smith", 
        "password": "123 [ ] { } , : null undefined true false                 \n",
        "age": 30,
        "null": null,
        "married": true,
        "divorced": false 
    }`;
    const expectedOutput = {
      "name": "John Smith", 
      "password": "123 [ ] { } , : null undefined true false                 \n",
      "age": 30,
      "null": null,
      "married": true,
      "divorced": false 
  }
    assert.deepStrictEqual(expectedOutput ,  JSONparse(input) )
  });
  
  it('Complex object with all awalible types and depth 3', () => {
    const input = `
    {
      "name": "John Smith", 
      "password": "123 [ ] { } , : null undefined true false                 \n",
      "age": 30,
      "null": null,
      "married": false,
      "divorced": true,
      "address": {
        "apt1": {
          "street": "Main street",
          "city": "New York",
          "country": "USA"
        },
        "apt2": {
          "street": "Second street",
          "city": "Boston",
          "country": "USA"
        }
      },
      "cars": {},
      "kids": [
        {
          "name": "John",
          "age": 5,
          "married": false,
          "pets": [
            {
              "name": "dog",
              "age": 3
            },
            {
              "name": "cat",
              "age": 2
            }
          ]
        },
        {
          "name": "Mary",
          "age": 7
        }
      ],
      "wife": null,
      "tags": []
    }`;
    const expectedOutput = {
      "name": "John Smith", 
      "password": "123 [ ] { } , : null undefined true false                 \n",
      "age": 30,
      "null": null,
      "married": false,
      "divorced": true,
      "address": {
        "apt1": {
          "street": "Main street",
          "city": "New York",
          "country": "USA"
        },
        "apt2": {
          "street": "Second street",
          "city": "Boston",
          "country": "USA"
        }
      },
      "cars": {},
      "kids": [
        {
          "name": "John",
          "age": 5,
          "married": false,
          "pets": [
            {
              "name": "dog",
              "age": 3
            },
            {
              "name": "cat",
              "age": 2
            }
          ]
        },
        {
          "name": "Mary",
          "age": 7
        }
      ],
      "wife": null,
      "tags": []
    };
    assert.deepStrictEqual(expectedOutput ,  JSONparse(input) )
  });
  
  it('Only number', () => {
    const inputInt = `123243315151212351352`;
    const expectedInt = 123243315151212351352;
    assert.deepStrictEqual(expectedInt ,  JSONparse(inputInt))
    const inputFloat = `123243315151212351352.123243315151212351352`
    const expectedFloat = 123243315151212351352.123243315151212351352;
    assert.deepStrictEqual( expectedFloat,  JSONparse(inputFloat))
  });
  it ('Only string with special charachters', () => {
    const input = `"123 [ ] { } , : null undefined true false                 \n"`
    const expected = "123 [ ] { } , : null undefined true false                 \n";
    assert.deepStrictEqual(expected,  JSONparse(input))
  });

  it('Only boolean', () => {
    const inputTrue = `true`;
    const expectedTrue = true;
    assert.deepStrictEqual(expectedTrue,  JSONparse(inputTrue))
    const inputFalse = `false`;
    const expectedFalse = false;
    assert.deepStrictEqual(expectedFalse,  JSONparse(inputFalse))
  });

  it('Only null', () => {
    const input = `null`;
    const expected = null;
    assert.deepStrictEqual(expected,  JSONparse(input))
    });
  
  it('Only array', () => {
    const input = `["123 [ ] { } , : null undefined true false                 \n", 123243315151212351352, 123243315151212351352.123243315151212351352, true, false, null]`;
    const expected = ["123 [ ] { } , : null undefined true false                 \n", 123243315151212351352, 123243315151212351352.123243315151212351352, true, false, null];
    assert.deepStrictEqual(expected,  JSONparse(input))
  } );
  
  it('Miss double quotes', () => {
    const endOfvalue  = `{
      "name": "John Smith
    }`;
    assert.throws(() => JSONparse(endOfvalue));
    
    const startOfvalue = `{
      "name": John Smith"
    }`;
    
    assert.throws(() => JSONparse(startOfvalue));
    const startOfkey = `{
      name": "John Smith"
    }`;
    assert.throws(() => JSONparse(startOfkey));

    const endOfkey = `{
      "name: "John Smith"
    }`;
    assert.throws(() => JSONparse(endOfkey));
  });
  describe('Miss colon', () => {
    const input = `{
      "name" "John Smith"
    }`;
    assert.throws(() => JSONparse(input));
  });
  describe('Miss comma', () => {
    const input = `{
      "name": "John Smith"
      "age": 30
    }`;
    assert.throws(() => JSONparse(input));
  });
  describe('Miss braces', () => {
    const open = `{
      "name": "John Smith"
    `;
    assert.throws(() => JSONparse(open));
      
    const close = `
      "name": "John Smith"
    }`;
    assert.throws(() => JSONparse(close));
  });

  describe('Miss square brackets', () => {
    const open  = `1, 2, 3 ]`;
    assert.throws(() => JSONparse(open));
    const close = `[ 1, 2, 3`;
    assert.throws(() => JSONparse(close));
  }); 

  describe('Unexpected tokens', () => {
    const input = `John Smith;'`;
    assert.throws(() => JSONparse(input));
    const input2 = `nul`;
    assert.throws(() => JSONparse(input2));
    const input3 = `truu`;
    assert.throws(() => JSONparse(input3));
    const input4 = `{
      "name": "John Smith"
      "age": sdckvsgsergsergse }`;
    assert.throws(() => JSONparse(input4));  
    
    })
;


});
