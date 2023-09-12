import { Book } from "./core/book";
import { Cart } from "./core/cart";
import { BookList } from "./core/bookList";
import { Order } from "./core/order";
import { Customer } from "./core/customer";

export default class API {
    constructor(
        public readonly book: Book = new Book(),
        public readonly cart: Cart = new Cart(new BookList()),
        public readonly order: Order = new Order(),
        public readonly customer: Customer = new Customer()
        ) {}
}