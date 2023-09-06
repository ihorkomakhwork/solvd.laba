"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const systemMock_1 = require("./api/systemMock");
const app_1 = require("./userspace/app");
const EventMultiplexor_1 = require("./libuv/EventMultiplexor");
const EventLoop_1 = require("./libuv/EventLoop");
(() => {
    console.info('\n==== Event multiplexor collection phase ====\n');
    (0, app_1.app)(systemMock_1.systemAPI);
    const events = EventMultiplexor_1.EventMultiplexor.get();
    console.info('==== EventLoop collection phase ====');
    const eventLoop = new EventLoop_1.EventLoop(events);
    eventLoop.run();
})();
//# sourceMappingURL=node.js.map