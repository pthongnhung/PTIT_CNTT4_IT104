function findElement<T>(arr: T[], value: T): T | undefined {
    return arr.find(item => item === value);
}

const $numbers = [1, 3, 5, 8, 11];
console.log(findElement($numbers, 5)); 
console.log(findElement($numbers, 100));