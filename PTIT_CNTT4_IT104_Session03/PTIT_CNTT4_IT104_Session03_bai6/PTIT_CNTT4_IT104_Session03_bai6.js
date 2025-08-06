var num1 = 20;
var num2 = 5;
var num3;
var num4 = "10";
var num5 = true;
num3 = num1 + num2;
console.log(num3);
num3 = num1 - num2;
console.log(num3);
num3 = num1 * num2;
console.log(num3);
num3 = num1 / num2;
console.log(num3);
var result = num4 + num5;
console.log(result);
// Trong TypeScript, toán tử + khi có một toán hạng là chuỗi (string) sẽ chuyển toán hạng còn lại thành chuỗi rồi nối lại.
// true khi bị ép kiểu sang chuỗi → "true"
// "10" + true → "10" + "true" → "10true"
