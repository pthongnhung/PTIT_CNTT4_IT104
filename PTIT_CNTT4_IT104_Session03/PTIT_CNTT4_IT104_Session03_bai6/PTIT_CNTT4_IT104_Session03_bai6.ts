let num1: number = 20;
let num2: number = 5;
let num3: number;

let num4: string = "10";
let num5: boolean = true;

num3 = num1 + num2;
console.log(num3);

num3 = num1 - num2;
console.log(num3);

num3 = num1 * num2;
console.log(num3);

num3 = num1 / num2;
console.log(num3);

let result = num4 + num5;
console.log(result);
// Trong TypeScript, toán tử + khi có một toán hạng là chuỗi (string) sẽ chuyển toán hạng còn lại thành chuỗi rồi nối lại.

// true khi bị ép kiểu sang chuỗi → "true"

// "10" + true → "10" + "true" → "10true"