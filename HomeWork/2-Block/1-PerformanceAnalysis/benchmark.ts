import process from 'process';
import {GenerateRow } from './range';
import { bubbleSort } from './bubbleSort';
import { mergeSort } from './mergeSort';
import { quickSort } from './quickSort';

export const measurePerformance = (fn: Function , array: number[] ): string => {
    const startTime = process.hrtime();
    fn(array);
    const endTime = process.hrtime(startTime);
    const executionTimeMs = (endTime[0] * 1000 + endTime[1] / 1000000).toFixed(2);
    return `${executionTimeMs} ms`;
};

interface Row { 
    length: number;
    bubbleSortTime: string;
    mergeSortTime: string;
    quickSortTime: string;
};


const generateRow = (range: number[]): Row => {
    const bubbleSortTime = measurePerformance(bubbleSort, range);
    const mergeSortTime = measurePerformance(mergeSort,range);
    const quickSortTime = measurePerformance(quickSort, range);
    const row = {
            length: range.length,
            bubbleSortTime,
            mergeSortTime,
            quickSortTime
        };
    return row;
};


export const generateReport = ( generateFn: GenerateRow ,  max: number, step: number = 100  ): Array<Row> => {
    const report: Array<Row> = [];

    for (let i = 2; i <= max; i += step) {
        const range = generateFn(i);
        const row = generateRow(range);
        report.push(row);
    }
    return report;
};
