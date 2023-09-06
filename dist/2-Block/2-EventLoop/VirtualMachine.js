"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualMachine = void 0;
const node_console_1 = __importDefault(require("node:console"));
const EventLoop_1 = require("./libuv/EventLoop");
const handler = {
    get: (target, prop) => {
        if (prop in target) {
            return target[prop];
        }
        else {
            throw new Error(`Property ${prop} does not exist`);
        }
    }
};
class VirtualMachine {
    constructor(stackSize, heapSize) {
        this.console = node_console_1.default;
        this.async = new EventLoop_1.EventLoop();
        this.stack = new Array(stackSize);
        this.heap = {};
    }
    run(code) {
        const code = `\n${src}`;
        return exported;
    }
}
exports.VirtualMachine = VirtualMachine;
;
//# sourceMappingURL=VirtualMachine.js.map