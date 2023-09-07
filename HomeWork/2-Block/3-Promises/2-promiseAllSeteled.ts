interface PromiseAllSettledResult {
    status: string;
    value?: any;
    reason?: Error;
}

export const promiseAllSettled = (promises: Promise<any>[]) =>  new Promise((resolve, reject) => {
    promises.reduce((acc, promise) => promise.then(value => {
        console.log(value);
        return acc.then(state => {
            return [...state, { status: "resolved", value: value
            }];
        }
        );
    }).catch(error => {
        return acc.then(state => {
            return [...state, { status: "rejected", reason: error }];
        }
        );
    }
    ), Promise.resolve([])).then(finall=> resolve(finall))
});