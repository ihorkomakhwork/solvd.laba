import { Database } from '../../lib/db';

//We implement the CRUD class, this is the base class for all classes that implement CRUD contract.
// In future we will rely on the fact that all classes that implement CRUD contract will have the same methods.
// In this case we will be able to use polymorphism.
export abstract class CRUD<T> {
    protected db: any;

    protected table: string = '';

    protected abstract setTable(): string;

    constructor() {
        this.table = this.setTable();
        this.db = new Database(this.table);
    }

    async read (id?: number, fields: string[] = ['*']) {
        return this.db.read(id, fields);
    }

    async create(record: T) {
        return this.db.create(record);
    }

    async update(id: number, record: T) {
        return this.db.update(id, record);
    }

    async delete(id: number) {
        return this.db.delete(id);
    }
}