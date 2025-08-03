const sumArray = (...arr)=>{
    return arr.map(arr => arr.reduce((sum, num) => sum + num, 0));
};
console.log(sumArray([1, 2, 3], [4, 5], [10])); 