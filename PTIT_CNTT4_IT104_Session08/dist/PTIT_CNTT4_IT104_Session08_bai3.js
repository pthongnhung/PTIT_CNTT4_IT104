function reverseArray(arr) {
    return arr.slice().reverse();
}
const numbers = [1, 2, 3, 4];
const reverseNumber = reverseArray(numbers);
console.log(reverseNumber);
const strings = ["a", "b", "c"];
const reverseString = reverseArray(strings);
console.log(reverseString);
