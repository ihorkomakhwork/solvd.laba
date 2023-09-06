export const promiseAll = (promises: Promise<any>[]): Promise<any[]> => new Promise((resolve, reject) => {
        const result: any[] = [];
        let counter = 0;
        promises.forEach((promise, index) => {
            promise.then((res) => {
                result[index] = res;
                counter++;
                if (counter === promises.length) resolve(result);
            }).catch((err) => reject(err));
        });
});