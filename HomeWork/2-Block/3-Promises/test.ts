import { promisify } from "./4-promisify";
import { promiseAll } from "./1-promiseAll";
import { promiseAllSettled } from "./2-promiseAllSeteled";
import { chainPromises } from "./3-chainPromises";

console.log("=== Promises ===");

/* === Promise All === */
{
    const promises = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
      ];
      
    promiseAll(promises)
        .then(results => console.log("All promises resolved:", results)) // Expected: [1, 2, 3]
        .catch(error => console.error("At least one promise rejected:", error));

}

/* === Promise all seteled === */
{
    const promises = [
        Promise.resolve(1),
        Promise.reject("Error occurred"),
        Promise.resolve(3)
      ];
      
      promiseAllSettled(promises)
        .then(results => {
          console.log("All promises settled:", results);
          // Expected: [{ status: 'resolved', value: 1 },
          //            { status: 'rejected', reason: 'Error occurred' },
          //            { status: 'resolved', value: 3 }]
        });
}

/* === Promise chain === */

{
    const asyncFunction1 = () => {
        return Promise.resolve("Result from asyncFunction1");
    }
      
    const asyncFunction2 = (data) =>  {
    return Promise.resolve(data + " - Result from asyncFunction2");
    }
      
    function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
    }
      
    const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
    
    chainPromises(functionsArray)
    .then(result => {
        console.log("Chained promise result:", result);
        // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
        console.error("Chained promise error:", error);
    });
    
}


/* === Promisify === */
{   
   const callbackStyleFunction = (value, callback) => {
        setTimeout(() => {
            if (value > 0) {
            callback(null, value * 2);
            } else {
            callback("Invalid value", null);
            }
        }, 1000);
    }

    const promisedFunction = promisify(callbackStyleFunction);

    promisedFunction(5)
    .then(result => {
        console.log("Promised function result:", result); // Expected: 6
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });
}
