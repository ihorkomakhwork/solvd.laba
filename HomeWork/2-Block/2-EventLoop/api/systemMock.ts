import  {EventMultiplexor, IEvent, TEventsName, isEvent } from '../libuv/EventMultiplexor'; 

type TAsyncAPI = {
    [key in TEventsName]: any;
};

const _systemAPI: TAsyncAPI = {
    fs: {
        readFile(callback ) { 
            return { 
                    resourse: 'FILE CONTENT', 
                    callback,
                    name: 'fs'
                }
        }
    },
    network: {
        connectSocket(callback) { 
            return { 
                resourse: 'SOCKET CONNECTION WAS SUCCESSFULL', 
                callback,
                name: 'network'
            }
            },
    },
    setImmediate: {
        setImdiatly(callback) { 
            return { 
                resourse: 'IMMEDIATE', 
                callback,
                name: 'setImmediate'
            }
        },
    },
    exit: {
        exitFrom(callback) { 
            return { 
                resourse: 'EXIT', 
                callback,
                name: 'exit'
            }
        }
    },
    promise: { 
        promiseSomething(callback) { 
            return { 
                resourse: 'PROMISE', 
                callback,
                name: 'promise'
            }
        } 
    } ,
    
    nextTick: {
        nextTickQueue(callback) { 
            return { 
                resourse: 'NEXT TICK', 
                callback,
                name: 'nextTick'
            }
        }     
    },

    timeout: {
        setTimer(callback) {
            return { 
                resourse: 'TIMEOUT', 
                callback,
                name: 'timeout'
            }
        }
    }
   
}; 

const fnHandler = {
    apply(target, thisArg, argsList) {
        const [ cb] = argsList;
        const {callback, resourse, name } = target(cb);
        const event: IEvent = {
            name,
            callback,
            resourse
        };
        EventMultiplexor.add(event);
        return event;
    } 
}; 

const handler = {
    get(target, prop) {
        const current = target[prop];
        if (isEvent(prop)) return new Proxy(current, handler);
        if (typeof current == 'function') {
            return new Proxy(current, fnHandler);
        }  
        return current;
    }
};
 
export const systemAPI = new Proxy(_systemAPI, handler)


