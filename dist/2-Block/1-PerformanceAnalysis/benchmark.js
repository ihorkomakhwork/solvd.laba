"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReport = exports.measurePerformance = void 0;
const process_1 = __importDefault(require("process"));
const bubbleSort_1 = require("./bubbleSort");
const mergeSort_1 = require("./mergeSort");
const quickSort_1 = require("./quickSort");
const measurePerformance = (fn, array) => {
    const startTime = process_1.default.hrtime();
    fn(array);
    const endTime = process_1.default.hrtime(startTime);
    const executionTimeMs = (endTime[0] * 1000 + endTime[1] / 1000000).toFixed(2);
    return `${executionTimeMs} ms`;
};
exports.measurePerformance = measurePerformance;
;
const generateRow = (range) => {
    const bubbleSortTime = (0, exports.measurePerformance)(bubbleSort_1.bubbleSort, range);
    const mergeSortTime = (0, exports.measurePerformance)(mergeSort_1.mergeSort, range);
    const quickSortTime = (0, exports.measurePerformance)(quickSort_1.quickSort, range);
    const row = {
        length: range.length,
        bubbleSortTime,
        mergeSortTime,
        quickSortTime
    };
    return row;
};
const generateReport = (generateFn, max, step = 100) => {
    const report = [];
    for (let i = 2; i <= max; i += step) {
        const range = generateFn(i);
        const row = generateRow(range);
        report.push(row);
    }
    return report;
};
exports.generateReport = generateReport;
//# sourceMappingURL=benchmark.js.map