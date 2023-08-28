"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range_1 = require("./range");
const benchmark_1 = require("./benchmark");
const NORMAL_COLOR = '\x1b[1;37m';
const logHeader = (message) => {
    console.log(NORMAL_COLOR);
    console.log(`
=========================================================================  
                              ${message}
=========================================================================`);
    console.log(NORMAL_COLOR);
};
const logStream = fs.createWriteStream('logfile.log', { flags: 'a' });
const writeToLog = (message) => {
    logStream.write(`${new Date().toISOString()}: ${message}\n`);
};
writeToLog('Log entry 1');
writeToLog('Log entry 2');
logStream.end();
{
    const reportAccesing = (0, benchmark_1.generateReport)(range_1.generateAccesing, 10000, 100);
    const reportDescending = (0, benchmark_1.generateReport)(range_1.generateDescending, 10000, 100);
    const reportRandom = (0, benchmark_1.generateReport)(range_1.generateRandom, 10000, 100);
    logHeader('Accesing');
    console.table(reportAccesing);
    logHeader('Descending');
    console.table(reportDescending);
    logHeader('Random');
    console.table(reportRandom);
}
;
//# sourceMappingURL=test.js.map