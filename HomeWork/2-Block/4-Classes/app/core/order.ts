import { CRUD} from "../util/crud";
import { IOrder } from "./interfaces/order.interface";

// Order class extends CRUD class wiht specific implements IBook interface
export class Order extends CRUD<IOrder> {
    setTable(): string { return 'order' } 

    constructor() {
        super();
    }
    
    
 }