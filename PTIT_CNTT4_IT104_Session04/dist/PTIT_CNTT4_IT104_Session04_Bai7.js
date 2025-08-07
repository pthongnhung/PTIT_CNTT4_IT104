function isPrime(n) {
    if (n < 2 || !Number.isInteger(n))
        return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
function processInput(input) {
    if (typeof (input) == "string") {
        if (/^\d+$/.test(input)) {
            const numberValue = Number(input);
            console.log(`${numberValue * numberValue}`);
        }
        else {
            const maches = input.match(/a-zA-Z/g);
            const count = maches ? maches.length : 0;
            console.log(`${count} ky tu chu cai`);
        }
    }
    else if (typeof (input) == "number") {
        if (isPrime(input)) {
            console.log(`La so nguyen to`);
        }
        else {
            console.log(`Khong phai so nguyen to`);
        }
    }
    else if (typeof (input) == "boolean") {
        if (input) {
            console.log(`gia tri la true - tien hanh xu ly`);
        }
        else {
            console.log(`gia tri la false-dung xu ly`);
        }
    }
}
processInput("123");
processInput("abc123!");
processInput(7);
processInput(10);
processInput(true);
processInput(false);
