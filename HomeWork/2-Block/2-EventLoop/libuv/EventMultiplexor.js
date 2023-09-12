"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMultiplexor = exports.isEvent = exports.EVENTS_NAME = void 0;
const util_1 = require("../api/util");
exports.EVENTS_NAME = {
    fs: 'fs',
    network: 'network',
    setImmediate: 'setImmediate',
    exit: 'exit',
    promise: 'promise',
    nextTick: 'nextTick',
    timeout: 'timeout',
};
const EVENT_DELEY = {
    fs: 4000,
    network: 2000,
    setImmediate: 1000,
    exit: 500,
    promise: 2000,
    nextTick: 1000,
    timeout: 3000,
};
;
const isEvent = (target) => {
    return Object.keys(exports.EVENTS_NAME).includes(target);
};
exports.isEvent = isEvent;
class EventMultiplexor {
    static add(event) {
        console.log(`\nReading ${event.name} resources...\n`);
        const delay = EVENT_DELEY[event.name];
        (0, util_1.sleep)(delay);
        this.events.add(event);
        return event;
    }
    ;
    static get() {
        return this.events;
    }
    static remove(event) {
        this.events.delete(event);
        return event;
    }
    static clearAll() {
        this.events.clear();
    }
}
exports.EventMultiplexor = EventMultiplexor;
EventMultiplexor.events = new Set();
;
//# sourceMappingURL=EventMultiplexor.js.map