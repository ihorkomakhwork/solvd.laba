export const chainPromises = (promises: Array<(value: any) => any>): Promise<any> => {
        let promiseChain: Promise<any>  = Promise.resolve();
        promises.forEach((func) => promiseChain = promiseChain.then(func));
        return promiseChain;
}
