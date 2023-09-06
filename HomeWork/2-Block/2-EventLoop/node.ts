import path from 'node:path';
import fsp from 'node:fs/promises';
import vm from 'node:vm';
import { systemAPI } from './api/systemMock';
import { app } from './userspace/app';
import { EventMultiplexor } from './libuv/EventMultiplexor';
import { EventLoop } from './libuv/EventLoop';

(() => {
    
    console.info('\n==== Event multiplexor collection phase ====\n')
    
    app(systemAPI);    
    
    const events = EventMultiplexor.get()
    console.info('==== EventLoop collection phase ====');
    const eventLoop = new EventLoop(events);
    eventLoop.run();    
})();
