import { Database } from '../../lib/db';

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