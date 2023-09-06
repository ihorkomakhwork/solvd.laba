"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const app = (systemAPI) => {
    systemAPI.exit.exitFrom((err, exit) => {
        console.log(exit);
    });
    systemAPI.fs.readFile((err, file) => {
        console.log(file);
    });
    systemAPI.fs.readFile((err, file) => {
        console.log(file);
    });
    systemAPI.network.connectSocket((err, file) => {
        console.log(file);
    });
    systemAPI.promise.promiseSomething((err, promise) => {
        console.log(promise);
        systemAPI.promise.promiseSomething((err, promise) => {
            console.log('Promise in deep');
        });
    });
    systemAPI.nextTick.nextTickQueue((err, nextTick) => {
        console.log(nextTick);
    });
};
exports.app = app;
//# sourceMappingURL=userspcae.js.map