const product =  Object.create({}, {  
    name: {
        value: "Laptop",
        writable: false,
        enumerable: false,
    },
    price: {
        value: 1000,
        writable: false,
        enumerable: false,
    },
    quantity: { value: 5}
});

//const getTotalPrice = (product) => {
//    return product.price * product.quantity;
//};
//const total = getTotalPrice(product); 

//TODO: TAS1
//Implement a function called getTotalPrice that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.

const getTotalPrice = (product) => {
    const price = Object.getOwnPropertyDescriptor(product, "price");
    const quantity = Object.getOwnPropertyDescriptor(product, "quantity");
    return price.value * quantity.value;
};



debugger;