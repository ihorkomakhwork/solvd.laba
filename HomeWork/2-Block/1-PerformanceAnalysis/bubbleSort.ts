export const bubbleSort = (arr: number[]): void => {
    for(let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const current = arr[i];
            const next = arr[j];  
            if (current > next) {
                arr[i] = next;
                arr[j] = current;
            }
        }
    }

};
