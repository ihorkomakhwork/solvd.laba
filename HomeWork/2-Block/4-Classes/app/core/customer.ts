import  {CRUD}  from "../util/crud";
import { ICustomer } from "./interfaces/customer.interface";

export class Customer extends CRUD<ICustomer> {
    setTable(): string { return 'customer' } 
    constructor() {
        super();
    }
}