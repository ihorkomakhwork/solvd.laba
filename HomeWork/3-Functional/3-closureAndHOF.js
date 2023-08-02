const createCounter = (counter = 0) => () => counter++;

const repeatFunction = (callback, n) => () => { 
        if (n < 0) while (true) callback();
        else for (let i = 0; i < n; i++) callback();
};