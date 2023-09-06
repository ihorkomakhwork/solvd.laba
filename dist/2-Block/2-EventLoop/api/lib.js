"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = exports.nextTick = exports.promise = exports.exit = exports.setImmediate = exports.network = exports.fs = void 0;
const systemMock_1 = require("./systemMock");
exports.fs = {
    readFile(callback) {
        const file = systemMock_1.systemAPI.fs.readFile();
        if (!file) {
            callback(new Error('File not found!'));
            return;
        }
        callback(null, file);
    }
};
exports.network = {
    connectSocket(callback) {
        const conection = systemMock_1.systemAPI.fs.connectSocket(callback);
        if (!conection) {
            callback(new Error('Connection failed!'));
            return;
        }
        callback(null, conection);
    }
};
exports.setImmediate = {
    setImdiatly(callback) {
        const immediate = systemMock_1.systemAPI.setImdiatly(callback);
        if (!immediate) {
            callback(new Error('Immediate failed'));
            ;
            return;
        }
        callback(null, immediate);
    },
};
exports.exit = {
    exit(callback) {
        const exit = exit(callback);
        if (!exit) {
            callback(new Error('Exit error!'));
            return;
        }
        callback(null, exit);
    }
};
exports.promise = {
    promise(callback) {
        const promise = systemMock_1.systemAPI.promise(callback);
        if (!promise) {
            callback(new Error('Promise error'));
            return;
        }
        callback(null, promise);
    }
};
exports.nextTick = {
    nextTick(callback) {
        const nextTick = systemMock_1.systemAPI.nextTick(callback);
        if (!nextTick) {
            callback(new Error('Next tick error'));
            return;
        }
        callback(null, nextTick);
    }
};
exports.timeout = {
    timeout(callback) {
        const timeout = systemMock_1.systemAPI.timeout(callback);
        if (!timeout) {
            callback(new Error('Timeout error'));
            return;
        }
        callback(null, timeout);
    }
};
//# sourceMappingURL=lib.js.map