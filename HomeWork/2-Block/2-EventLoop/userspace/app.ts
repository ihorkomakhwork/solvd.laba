export const app = (systemAPI) => {
    systemAPI.exit.exitFrom((err , exit) => {
        console.log(exit);
     });
    
    systemAPI.fs.readFile((err , file) => {
        console.log(file);
    });
    
    systemAPI.fs.readFile((err , file) => {
        console.log(file);
    });
    
    systemAPI.network.connectSocket((err , file) => {
        console.log(file);
    });


    systemAPI.promise.promiseSomething((err , promise) => {
        console.log(promise);
        systemAPI.promise.promiseSomething((err , promise) => {
            console.log('Promise in deep');
        })
    }); 
    
    systemAPI.nextTick.nextTickQueue((err , nextTick) => {
        console.log(nextTick);
    });
    
};