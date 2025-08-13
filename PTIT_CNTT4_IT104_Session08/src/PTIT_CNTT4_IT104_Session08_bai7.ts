function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}

const numbers1 = [[1, 2], [3, 4], [5, 6]];
console.log(flatten(numbers1)); 

const fruits = [['apple', 'banana'], ['cherry'], ['date', 'elderberry']];
console.log(flatten(fruits));

