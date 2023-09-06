import { IEvent } from "./EventMultiplexor";

const ID_LENGTH = 32;
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA = ALPHA_UPPER + ALPHA_LOWER;
const DIGIT = '0123456789';
const ALPHA_DIGIT = ALPHA + DIGIT;

export class EventQueue {
    public fs = new Set();
    public network = new Set();
    public exit = new Set();
    public promise = new Set();
    public nextTick = new Set();
    public timeout = new Set();
    public setImmediate = new Set();

    generateId() {
       const base = ALPHA_DIGIT.length;
        let key = '';
        for (let i = 0; i < ID_LENGTH; i++) {
          const index = Math.floor(Math.random() * base);
          key += ALPHA_DIGIT[index];
        }
        return key;
    }

    public clearAll(): void {
        this.fs.clear();
        this.network.clear();
        this.exit.clear();
        this.promise.clear();
        this.nextTick.clear();
        this.timeout.clear();
        this.setImmediate.clear();
    }
}



