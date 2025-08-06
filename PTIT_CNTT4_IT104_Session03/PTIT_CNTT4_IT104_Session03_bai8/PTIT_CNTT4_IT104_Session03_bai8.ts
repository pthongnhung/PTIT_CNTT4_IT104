function toNumber(value: string | number): number | null {
    if (typeof value === "number") return value;
    const num = Number(value);
    return isNaN(num) ? null : num;
}

function add(a: string | number, b: string | number): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA + numB;
}

function subtract(a: string | number, b: string | number): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA - numB;
}

function multiply(a: string | number, b: string | number): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA * numB;
}

function divide(a: string | number, b: string | number): number | string {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numA === null || numB === null || numB === 0) return "Giá trị không hợp lệ";
    return numA / numB;
}
console.log(add("10", 5));       
console.log(subtract("20", "4"));
console.log(multiply(3, "2"));   
console.log(divide(10, "a"));    
console.log(divide("8", "0"));   
