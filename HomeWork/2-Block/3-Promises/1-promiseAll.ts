export const promiseAll = (promises: Promise<any>[]): Promise<any[]> => new Promise((resolve, reject) => {
    promises.reduce((acc, promise) => {
        return promise.then(value => {
                             return acc.then(state => { 
                                return [...state, value] 
                            }
                            )
                    }).catch(error => reject(error))}, Promise.resolve([])) 
        
        .then(finall=> resolve(finall))
    

        });