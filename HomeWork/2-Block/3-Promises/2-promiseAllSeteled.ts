interface PromiseAllSettledResult {
    status: string;
    value?: any;
    reason?: Error;
}

export const promiseAllSettled = (promises) => {
    return new Promise(resolve => {
        const result: Array<PromiseAllSettledResult> = [];
        promises.forEach((promise, counter) => {
            promise.then((res) => {
                result[counter] = { status: "resolved", value: res };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            }).catch((err) => {
                result[counter] = { status: "rejected", reason: err };
                counter++;
                if (counter === promises.length)
                    resolve(result);
            });
        });
    });
};