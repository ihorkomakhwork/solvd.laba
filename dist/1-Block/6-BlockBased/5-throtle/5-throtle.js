"use strict";
const throttle = (fn, timeout) => {
    let timestamp;
    return (...args) => {
        const present = Date.now();
        if (!timestamp) {
            timestamp = present + timeout;
            fn(...args);
            setTimeout(() => timestamp = undefined, timeout);
        }
    };
};
const onScroll = event => console.log('Scroll event:', event);
const throttledScrollHandler = throttle(onScroll, 3000);
window.addEventListener('scroll', throttledScrollHandler);
//# sourceMappingURL=5-throtle.js.map