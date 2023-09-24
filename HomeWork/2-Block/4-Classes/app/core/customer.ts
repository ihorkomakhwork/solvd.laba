import { CRUD }  from "../util/crud";
import { ICustomer } from "./interfaces/customer.interface";

// Customer class extends CRUD class wiht specific implements IBook interface 
export class Customer extends CRUD<ICustomer> {
    setTable(): string { return 'customer' } 
    constructor() {
        super();
    }
}