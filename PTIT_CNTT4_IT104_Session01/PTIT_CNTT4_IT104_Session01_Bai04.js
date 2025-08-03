let checkParity = (a) => {
    if (typeof a != "number") {
        console.log(`${a} is not a number`);
    } else if (a % 2 == 0) {
        console.log(`${a} is even a number`);
    } else {
        console.log(`${a} is odd a number`);
        
    }
}
checkParity("a");
checkParity(2);
checkParity(3);