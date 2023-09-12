import { CRUD } from '../util/crud';
import { IBook } from './interfaces/book.interface';

// Book class extends CRUD class and implements IBook interface 
export class Book extends CRUD<IBook> {
    // setTable method set db table name and in future we will use it in CRUD class
    setTable(): string { return 'book'; }
    constructor( ) {super();}
}