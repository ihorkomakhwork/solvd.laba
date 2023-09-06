"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventLoop = void 0;
const Queue_1 = require("./Queue");
class EventLoop {
    constructor(events, queue = new Queue_1.EventQueue()) {
        this.events = events;
        this.queue = queue;
        this.events = events;
    }
    run() {
        while (this.events.size) {
            for (const multiplexorEvent of this.events) {
                const { name } = multiplexorEvent;
                const q = this.queue[name];
                q.add(multiplexorEvent);
                this.events.delete(multiplexorEvent);
            }
            this.itetation();
        }
    }
    itetation() {
        const { fs, network, exit, promise, nextTick, timeout, setImmediate } = this.queue;
        const queues = [timeout, network, fs, setImmediate, exit];
        const emergency = [promise, nextTick];
        for (const q of queues) {
            if (promise.size || nextTick.size) {
                for (const emergencyQueue of emergency) {
                    if (!emergencyQueue.size)
                        continue;
                    this.execute(emergencyQueue);
                }
                ;
            }
            ;
            if (!q.size)
                continue;
            this.execute(q);
        }
    }
    execute(queue) {
        for (const event of queue) {
            const { callback, resourse } = event;
            callback(null, resourse);
            queue.delete(event);
        }
    }
}
exports.EventLoop = EventLoop;
;
//# sourceMappingURL=EventLoop.js.map