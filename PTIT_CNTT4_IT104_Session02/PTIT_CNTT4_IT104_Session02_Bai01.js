const sum = (numbers) => {
    let total = 0;
    for (const element of numbers) {
        if (element % 2 == 0) {
            total += element;
        }
    }
    return total;
}
console.log(sum([1,2,3,4]));
