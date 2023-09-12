import { CRUD } from '../util/crud';
import { IBook } from './interfaces/book.interface';

export class Book extends CRUD<IBook> {
     setTable(): string { return 'book'; }
    constructor( ) {super();}
}