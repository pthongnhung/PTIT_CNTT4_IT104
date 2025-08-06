function toNumber(value) {
    if (typeof value === "number")
        return value;
    var num = Number(value);
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA + numB;
}
function subtract(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA - numB;
}
function multiply(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null)
        return "Giá trị không hợp lệ";
    return numA * numB;
}
function divide(a, b) {
    var numA = toNumber(a);
    var numB = toNumber(b);
    if (numA === null || numB === null || numB === 0)
        return "Giá trị không hợp lệ";
    return numA / numB;
}
console.log(add("10", 5));
console.log(subtract("20", "4"));
console.log(multiply(3, "2"));
console.log(divide(10, "a"));
console.log(divide("8", "0"));
