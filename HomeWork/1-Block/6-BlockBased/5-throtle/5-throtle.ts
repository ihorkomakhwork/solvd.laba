type timestamp = number | undefined;
type throttle = (fn: Function, timeout: number) => (...args: []) => void;

const throttle: throttle = (fn, timeout) => {
  let timestamp: timestamp;
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
