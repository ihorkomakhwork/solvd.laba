export const chainPromises = (promises: Array<(value: any) => any>): Promise<any> =>  promises
                                 .reduce((acc: Promise<any> ,func) => acc = acc
                                 .then(func)
                                 .catch(error => error), 
                                        Promise.resolve());
