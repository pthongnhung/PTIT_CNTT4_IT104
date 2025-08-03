const mergeSortedArrays = (arr1, arr2) => {
    const merged = [...arr1, ...arr2];
    merged.sort((a, b) => a - b);
    return merged;
};

const a = [1, 2, 3, 5, 9];
const b = [4, 6, 7, 8];

const result = mergeSortedArrays(a, b);
console.log(result);
  