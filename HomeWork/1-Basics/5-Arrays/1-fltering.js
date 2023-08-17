'use strict';

const product = [
  {
    name: 'Iphone 8',
    price: 1000,
    quantity: 100,
  },
  {
    name: 'MackBook Pro 15',
    price: 1500,
    quantity: 2,
  },
  {
    name: 'Apple 2',
    price: 1500,
    quantity: 2,
  },
  {
    name: 'Vertu',
    price: 1000000,
    quantity: 0,
  },
  {
    name: 'Nokia 3310',
    price: Infinity,
    quantity: 0,
  },
];

const arrayFilterUnique = (array, callback) => {
  const filtered = array.filter(callback);
  return [...new Set(filtered)];
};

const inStock = arrayFilterUnique(product, item => item.quantity > 0);

module.exports = { arrayFilterUnique, inStock };
