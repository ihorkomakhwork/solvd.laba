"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemAPI = void 0;
const EventMultiplexor_1 = require("../libuv/EventMultiplexor");
const _systemAPI = {
    fs: {
        readFile(callback) {
            return {
                resourse: 'FILE CONTENT',
                callback,
                name: 'fs'
            };
        }
    },
    network: {
        connectSocket(callback) {
            return {
                resourse: 'SOCKET CONNECTION WAS SUCCESSFULL',
                callback,
                name: 'network'
            };
        },
    },
    setImmediate: {
        setImdiatly(callback) {
            return {
                resourse: 'IMMEDIATE',
                callback,
                name: 'setImmediate'
            };
        },
    },
    exit: {
        exitFrom(callback) {
            return {
                resourse: 'EXIT',
                callback,
                name: 'exit'
            };
        }
    },
    promise: {
        promiseSomething(callback) {
            return {
                resourse: 'PROMISE',
                callback,
                name: 'promise'
            };
        }
    },
    nextTick: {
        nextTickQueue(callback) {
            return {
                resourse: 'NEXT TICK',
                callback,
                name: 'nextTick'
            };
        }
    },
    timeout: {
        setTimer(callback) {
            return {
                resourse: 'TIMEOUT',
                callback,
                name: 'timeout'
            };
        }
    }
};
const fnHandler = {
    apply(target, thisArg, argsList) {
        const [cb] = argsList;
        const { callback, resourse, name } = target(cb);
        const event = {
            name,
            callback,
            resourse
        };
        EventMultiplexor_1.EventMultiplexor.add(event);
        return event;
    }
};
const handler = {
    get(target, prop) {
        const current = target[prop];
        if ((0, EventMultiplexor_1.isEvent)(prop))
            return new Proxy(current, handler);
        if (typeof current == 'function') {
            return new Proxy(current, fnHandler);
        }
        return current;
    }
};
exports.systemAPI = new Proxy(_systemAPI, handler);
//# sourceMappingURL=systemMock.js.map