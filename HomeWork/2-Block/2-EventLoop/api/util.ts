export const sleep = (msec: number): void => {
    const end = new Date().getTime() + msec;
    while (new Date().getTime() < end);
};
  