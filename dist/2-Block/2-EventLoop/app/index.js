"use strict";
exit.exitFrom((err, exit) => {
    console.log(exit);
});
fs.readFile((err, file) => {
    console.log(file);
});
fs.readFile((err, file) => {
    console.log(file);
});
network.connectSocket((err, file) => {
    console.log(file);
});
promise.promiseSomething((err, promise) => {
    console.log(promise);
    systemAPI.promise.promiseSomething((err, promise) => {
        console.log('Promise in deep');
    });
});
nextTick.nextTickQueue((err, nextTick) => {
    console.log(nextTick);
});
network.connectSocket((err, file) => {
    console.log(file);
});
systemAPI.setImmediate.setImdiatly((err, file) => {
    console.log(file);
});
systemAPI.exit.exitFrom((err, exit) => {
    console.log(exit);
});
systemAPI.fs.readFile((err, file) => {
    console.log(file);
});
systemAPI.setImmediate.setImdiatly((err, file) => {
    console.log(file);
});
systemAPI.promise.promiseSomething((err, promise) => {
    console.log(promise);
});
//# sourceMappingURL=index.js.map