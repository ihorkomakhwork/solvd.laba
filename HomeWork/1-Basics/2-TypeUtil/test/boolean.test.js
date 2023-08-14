'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { invertBoolean } = require('../lib/boolean.js');

describe('invertBoolean', () => {
  it('True', () => {
    const result = invertBoolean(true);
    assert.equal(result, false);
  });
  it('False', () => {
    const result = invertBoolean(false);
    assert.equal(result, true);
  });
  it('Number', () => assert.throws(() => invertBoolean(123), new Error('Invalid type of argument')));
  it('Object', () => assert.throws(() => invertBoolean({ a: 1, b: 2 }), new Error('Invalid type of argument')));

});
