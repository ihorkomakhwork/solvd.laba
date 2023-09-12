import { IBook } from "./book.interface";

export interface ICart {
    addItem(book: IBook): IBook[],
    removeItem(id): IBook[],
    calculateTotal(): number,
}