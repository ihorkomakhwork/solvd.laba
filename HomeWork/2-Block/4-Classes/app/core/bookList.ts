import { CRUD } from '../util/crud';
import { IBookList } from './interfaces/bookList.interface';

// BookList class extends CRUD class wiht specific IBookList interface 
export class BookList extends CRUD<IBookList> {
    // setTable method set db table name and in future we will use it in CRUD class
    setTable(): string { return 'bookList' } 
    constructor() {
        super();
    }
}