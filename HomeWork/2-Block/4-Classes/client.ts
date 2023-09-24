import config from './config';
import { Database } from './lib/db';

const api = (palace, method) => async (...args) => {
    const url = `http://${config.api.host}:${config.api.port}/api/${palace}/${method}`;
    const res = await fetch( url , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify([...args]) 
        }
    );
    
    if (res.status !== 200) throw new Error(`Status Code: ${res.status}`);
    return res.json();
    }

// Scaffolding for API
const API = {
    createCustomer: api('customer', 'create'),
    readCustomer: api('customer', 'read'),
    readItem: api('cart', 'read'),
    readCurt: api('cart', 'read'),
    readBooks: api('book', 'read'),
    createBook: api('book', 'create'),
    createCart: api('cart', 'create'),
    addItem: api('cart', 'addItem'),
    removeItem: api('cart', 'removeItem'),
    calculateTotal: api('cart', 'calculateTotal'),
}; 

const createCustomers = async () => {
    await API.createCustomer({name: 'Petya', email: 'petya@gmail.com'})
    await API.createCustomer({name: 'Kolya', email: 'kolya@gmail.com'})
    await API.createCustomer({name: 'Sasha', email: 'sasha@gmail.com'})
    await API.createCustomer({name: 'Masha', email: 'masha@gmail.com'});
    await API.createCustomer({name: 'Vasya', email: 'vasia@gmail.com'});
};

const createCarts = async () => {
    await API.createCart({customerId: 1});
    await API.createCart({customerId: 2});
    await API.createCart({customerId: 3});
    await API.createCart({customerId: 4});
    await API.createCart({customerId: 5});
};

const createteBooks = async () => {
    await API.createBook({title: 'War and peace', price: 100001, author: 'Tolstoy' , isbn: 3234567190});
    await API.createBook({title: 'Harry Potter', price: 33333, author: 'Rowling' , isbn: 12342233892});
    await API.createBook({title: 'The Lord of the Rings', price: 1000, author: 'Tolkien' , isbn: 52333467894});
    await API.createBook({title: 'The Hobbit', price: 1000, author: 'Tolkien' , isbn: 52333467894});   
    await API.createBook({title: 'The Silmarillion', price: 1000, author: 'Tolkien' , isbn: 52333467894});
};

const addItems = async () => {
    await API.addItem({cartId: 11, bookId: 11, });
    await API.addItem({cartId: 12, bookId: 12, });
    await API.addItem({cartId: 13, bookId: 13, });
    await API.addItem({cartId: 14, bookId: 14, });
    await API.addItem({cartId: 15, bookId: 15, });
};

(async () => {
    try {
    // Simulate the work of the client of bookstore
    //============================================
    //1. Add books to catalog
    //await createteBooks();
    
    //============================================
    //2. Add customers
    //await createCustomers();
    
    //============================================
    //3. Add carts
    //await createCarts();
    
    //============================================
    //4. Add item to cart
    //await addItems();

    //const books = await API.readBooks();    
    //const customers = await API.readCustomer();
    //const cart = await API.readCurt();
    //const items = await API.readItem();
    const total = await API.calculateTotal(11);
    console.dir({/*  items,  books  customers,   cart,*/  total });
    
    } catch (err: any) {
    console.error(err);   
    }
})();
