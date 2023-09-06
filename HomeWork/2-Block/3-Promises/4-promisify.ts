type Promisify = (fn: Function) => (...args: any[] ) => Promise<never>;
export const promisify: Promisify = (fn)  => (...args) => new Promise((resolve, reject) => {
    args.push((err, res) => {
        if (err) reject(err);
        else resolve(res);}); 
    fn(...args)    
});