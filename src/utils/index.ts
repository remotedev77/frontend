export const isAllEqual = (array1: number[], array2: number[]) => {
  return array1.length !== array2.length
    ? false
    : array2.every((element) => array1.includes(element));
};
