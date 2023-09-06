"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventQueue = void 0;
const ID_LENGTH = 32;
const ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHA = ALPHA_UPPER + ALPHA_LOWER;
const DIGIT = '0123456789';
const ALPHA_DIGIT = ALPHA + DIGIT;
class EventQueue {
    constructor() {
        this.fs = new Set();
        this.network = new Set();
        this.exit = new Set();
        this.promise = new Set();
        this.nextTick = new Set();
        this.timeout = new Set();
        this.setImmediate = new Set();
    }
    generateId() {
        const base = ALPHA_DIGIT.length;
        let key = '';
        for (let i = 0; i < ID_LENGTH; i++) {
            const index = Math.floor(Math.random() * base);
            key += ALPHA_DIGIT[index];
        }
        return key;
    }
    clearAll() {
        this.fs.clear();
        this.network.clear();
        this.exit.clear();
        this.promise.clear();
        this.nextTick.clear();
        this.timeout.clear();
        this.setImmediate.clear();
    }
}
exports.EventQueue = EventQueue;
//# sourceMappingURL=Queue.js.map