import { IBook } from './book.interface';
import { ICustomer } from './customer.interface';

export interface IOrder {
    customer: ICustomer;
    books: IBook[];
    total: number;
}