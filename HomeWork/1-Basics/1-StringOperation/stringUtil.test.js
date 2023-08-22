'use strict';

const assert = require('node:assert');
const { describe, it } = require('node:test');
const stringUtil = require('./stringUtil');

describe('Plus', () => {
  it('Two ints', () => {
    const sum = stringUtil.plus('5', '5');
    assert.strictEqual(sum, '10');
  });

  it('Big num and standart int', () => {
    const sum = stringUtil.plus(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '1',
    );
    assert.strictEqual(
      sum,
      '9988877799887788999887889998789877899888777998877889998878899987898779',
    );
  });

  it('Two big num', () => {
    const sum = stringUtil.plus(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
    assert.strictEqual(
      sum,
      '19977755599775577999775779997579755799777555997755779997757799975797556',
    );
  });
});

describe('Minus', () => {
  it('Two ints', () => {
    const difference = stringUtil.minus('235', '5');
    assert.strictEqual(difference, '230');
  });

  it('Big num and standart int', () => {
    const difference = stringUtil.minus(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '1',
    );
    assert.strictEqual(
      difference,
      '9988877799887788999887889998789877899888777998877889998878899987898777',
    );
  });

  it('Two big num', () => {
    const difference = stringUtil.minus(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
    assert.strictEqual(difference, '0');
  });
});

describe('Multiply', () => {
  it('Two ints', () => {
    const product = stringUtil.multiply('5', '5');
    assert.strictEqual(product, '25');
  });

  it('Big num and standart int', () => {
    const product = stringUtil.multiply(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '1',
    );
    assert.strictEqual(
      product,
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
  });

  it('Two big num', () => {
    const product = stringUtil.multiply(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
    assert.strictEqual(
      product,
      // eslint-disable-next-line max-len
      '99777679701091116064141285104054636388523420718562054883974097820025537837164504043906278437096425184120239296982669673973360114839573893284',
    );
  });
});

describe('Divide', () => {
  it('Two ints', () => {
    const quotient = stringUtil.divide('25', '5');
    assert.strictEqual(quotient, '5');
  });

  it('Big num and standart int', () => {
    const quotient = stringUtil.divide(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '1',
    );
    assert.strictEqual(
      quotient,
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
  });

  it('Two big num', () => {
    const quotient = stringUtil.divide(
      '9988877799887788999887889998789877899888777998877889998878899987898778',
      '9988877799887788999887889998789877899888777998877889998878899987898778',
    );
    assert.strictEqual(quotient, '1');
  });
});
