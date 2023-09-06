"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncAPI = void 0;
const EventMultiplexor_1 = require("../libuv/EventMultiplexor");
const _asyncAPI = {
    fs: {
        readFile() {
            return `FILE`;
        }
    },
    network: {
        connectSocket() { return `CONNECTION WAS SUCCESSFUL`; },
    },
    setImmediate: {
        setImdiatly() { return `IMMEDIATE`; },
    },
    exit: {
        exit() { return `FILE CONTENT`; }
    },
    promise: {
        promise() { return `PROMISE`; }
    },
    nextTick: {
        nextTick() { return `NEXT TICK`; }
    },
    timeout: {
        timeout() { return `TIMEOUT`; }
    }
};
const asyncHandler = {
    get(target, prop, resiver) {
        const currentAsyncApi = target[prop];
        // REWRITE THIS CHECKER
        if (currentAsyncApi instanceof Object)
            return new Proxy(currentAsyncApi, asyncHandler);
        const event = {
            name: prop,
            callback: currentAsyncApi,
            resourse: target,
        };
        EventMultiplexor_1.EventMultiplexor.addEvent(event);
        return currentAsyncApi;
    }
};
exports.asyncAPI = new Proxy(_asyncAPI, asyncHandler);
//# sourceMappingURL=nodeAsyncApi.mock.js.map