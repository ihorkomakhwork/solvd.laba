'use strict';

const products = [
  { name: 'HeadPhones Sound-3000', price: 1 },
  { name: 'TV LG', price: 1 },
  { name: 'Apple Computer 0x1', price: 10 },
];

const calculateDiscountedPrice = (products, discount) => products.map(product => ({
  name: product.name,
  price: product.price - ((product.price / 100) * discount)
})
);

const calculateTotalPrice = products => products.reduce((total, product) => total + product.price, 0);

module.exports = { calculateTotalPrice, calculateDiscountedPrice, products };
