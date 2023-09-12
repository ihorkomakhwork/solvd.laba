import { CRUD } from '../util/crud';
import { IBook } from './interfaces/book.interface';
import { IBookList } from './interfaces/bookList.interface';

export class BookList extends CRUD<IBookList> {
    setTable(): string { return 'bookList' } 
    
    constructor() {
        super();
    }
}