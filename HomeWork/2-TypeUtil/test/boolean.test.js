const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const { invertBoolean } = require('../lib/boolean.js');

describe('invertBoolean', () => {
    it('True', () => {
        const result = invertBoolean(true);
        assert.equal(result, false);
    });
    it('False', () => {
        const result = convertToBoolean(false);
        assert.equal(result, true);
    });
    it('Number', () => assert.throws(() => convertToBoolean(123), new Error('Invalid type of argument')  ));
});