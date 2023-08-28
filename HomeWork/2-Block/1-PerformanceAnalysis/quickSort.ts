export const quickSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter((value) => value < middle);
    const greater = arr.filter((value) => value > middle);
    return quickSort(less).concat(middle, quickSort(greater));
}
