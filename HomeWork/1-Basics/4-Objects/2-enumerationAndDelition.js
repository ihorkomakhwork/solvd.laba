

const product = Object.create(
  {},
  {
    name: {
      value: 'Laptop',
      writable: false,
      enumerable: false,
    },
    price: {
      value: 1000,
      writable: false,
      enumerable: false,
      configurable: true,
    },
    quantity: {
      value: 5,
      configurable: true,
    },
  },
);

const deleteNonConfigurable = (obj, porop) => {
  const descriptor = Object.getOwnPropertyDescriptor(obj, porop);
  if (!descriptor) throw new Error('The property does not exist');
  const { configurable } = descriptor;
  if (!configurable) throw new Error('The property is not configurable');
  delete obj[porop];
};

const getTotalPrice = product => {
  const price = Object.getOwnPropertyDescriptor(product, 'price');
  const quantity = Object.getOwnPropertyDescriptor(product, 'quantity');
  return price.value * quantity.value;
};

module.exports = { product, deleteNonConfigurable, getTotalPrice };
