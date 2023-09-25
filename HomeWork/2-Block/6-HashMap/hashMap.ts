import { FHash } from './hash'
import { LinkedList } from '../5-DataStructures/5-linkedList';

// Hash map implementation based on linked list
export default class HashMap {
    // counter of elements it is used lilke flaf for scale
    private conunter: number = 0;
    //create 5 buckets by default
    private buckets: Array<LinkedList<any>> = [new LinkedList<any>(),
                                               new LinkedList<any>(),
                                               new LinkedList<any>(),
                                               new LinkedList<any>(),
                                               new LinkedList<any>()
                                              ];
    // We implement DI via constructor for hash function
    // it's implementation of polymorphism
    // don't metter what hash function we use
    // if it's implement contract FHash it will work
    // no metter on internal implementation
    constructor(private hash: FHash) {}
    
    
    // via this method we can iterate over all elements in map
    // in for loop
    public *[Symbol.iterator](): Generator<any, void, void> {
        for (const bucket of this.buckets) {
            for (const item of bucket) {
                if (item === null) continue;
                yield item;
            }
        }
    }
    // setting value by key
    public  set(key: any, value: any):void { ;
        const contains =  this.has(key);
        if (contains) throw new Error('Key already exists');
        const e =  this.entity(key);
        this.conunter++;
        e.insert({key, value});
        // if ammount is more than buckets length we scale
        if (this.conunter > this.buckets.length) this.scale();
    }
    
    // getting value by key
    public get(key: any): any {
        if (!this.has(key)) return;
        const e =  this.entity(key);
        for (const item of e)
            if (item.key === key) return item.value;
    }
    
    // check if key exists
    public has(key: any):any {
        const e =  this.entity(key);
        for (const item of e) {
            if (item === null) return false;
            if (item.key === key) return true;
        } 
    };

    // remove element by key
    public  remove(key: any): void {
        const e =  this.entity(key);
        if (!e) return;
        for (const item of e) {
            if (item === null) break;
            if (item.key === key) e.delete(item);
        } 
    }

    // return all
    public  state() {
        return this.buckets;
    };
        
    private  scale(): void {
        // save prev buckets
        const prevBuckets = this.buckets;
        this.buckets = [];
        
        // fill map with new buckets emptybuckets 
        // but increase ammount of buckets by 2
        for (let i = 0; i < prevBuckets.length * 2; i++) {
            const list = new LinkedList<any>();
            this.buckets.push(list)
        }
        
        // restore prev elements with new hash that relate
        // with new length of buckets
        for (const bucket of prevBuckets) {
            for (const item of bucket) {
                if (item === null) continue;
                const e =  this.entity(item.key);
                e.insert(item);
            }
        }
    }

    // hash key and get index of bucket
    private  bucket(key: any): number {
        // module dividing hash by length of buckets
        // remainder of division is index of bucket
        return  this.hash(key) % this.buckets.length;
    }

    // get entity by key
    private  entity(key): LinkedList<any> {
        const bucket =  this.bucket(key);
        return this.buckets[bucket];
    }

};