function findFirstEven(arr) {
    return arr.find(item => item % 2 === 0);
}
const _numbers = [1, 3, 5, 8, 11];
const firstEven = findFirstEven(_numbers);
console.log(firstEven);
const moreNumbers = [7, 9, 13];
console.log(findFirstEven(moreNumbers));
