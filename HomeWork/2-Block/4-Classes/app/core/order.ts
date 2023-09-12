import { CRUD} from "../util/crud";
import { IOrder } from "./interfaces/order.interface";

export class Order extends CRUD<IOrder> {
    setTable(): string { return 'order' } 

    constructor() {
        super();
    }
    
    
 }