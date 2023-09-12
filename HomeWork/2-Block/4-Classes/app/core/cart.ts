import { CRUD } from "../util/crud";
import { ICart } from "./interfaces/cart.interface";
import { IBook } from "./interfaces/book.interface";
import { IBookList } from "./interfaces/bookList.interface";
import { BookList } from "./bookList";

// Cart class extends CRUD class wiht specific implements IBook interface 
export class Cart extends CRUD<ICart> {
    setTable(): string { return 'cart' } 

    constructor(private bookList: BookList) {

        super();
    }
    
    async addItem(item: IBookList): Promise<string> {
        // We know that book list extends CRUD class and has create method
        return await this.bookList.create(item);
    }
    
    async removeItem(id: number): Promise<string> {
        // We know that book list extends CRUD class and has delete method
        return await this.bookList.delete(id);
    }

    async calculateTotal(id: number ): Promise<any> {
        const bookList = await this.bookList.read(id)
        const total = bookList.rows.reduce((acc, item) => {
            console.log(item.price)
            return  acc += item.price
        }, 0);
        return { rows: total };
    }

}