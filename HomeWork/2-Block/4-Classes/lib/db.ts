import config from '../config'
import pg from 'pg';

const pool = new pg.Pool(config.db);

// This class is our own query builder for more convenient work with database
// It's help us to give more appropriete and flexible interface  
export class Database {
  table: string;
  constructor (table: string) {
    this.table = table;
  }

  async query(sql: string, args: string[]) {
    return pool.query(sql, args);
  }

  async read(id?: number, fields: Array<string> = ['*']) {
    const names = fields.join(', ');
    const sql = `SELECT ${names} FROM "${this.table}"`;
    if (!id) return pool.query(sql);
    return pool.query(`${sql} WHERE id = $1`, [id]);
  }

  async create({ ...record }) {
    const keys = Object.keys(record);
    const nums = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      nums[i] = `$${++i}`;
    }
    const fields = '"' + keys.join('", "') + '"';
    const params = nums.join(', ');
    const sql = `INSERT INTO "${this.table}" (${fields}) VALUES (${params})`;
    return pool.query(sql, data);
  }

  async update(id: number, { ...record }) {
    const keys = Object.keys(record);
    const updates = new Array(keys.length);
    const data = new Array(keys.length);
    let i = 0;
    for (const key of keys) {
      data[i] = record[key];
      updates[i] = `${key} = $${++i}`;
    }
    const delta = updates.join(', ');
    const sql = `UPDATE "${this.table}" SET ${delta} WHERE id = $${++i}`;
    data.push(id);
    return pool.query(sql, data);
  }

  async delete(id: number) {
    const sql = `DELETE FROM "${this.table}" WHERE id = $1`;
    return pool.query(sql, [id]);
  }
}