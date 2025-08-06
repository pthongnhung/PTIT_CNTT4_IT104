function toNumber(value: string): number | null {
    const num = Number(value);
    return isNaN(num) ? null : num;
}

function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number | string {
    return b === 0 ? "Không chia được cho 0" : a / b;
}

function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
    return Math.pow(base, 1 / root);
}

function factorial(n: number): number | string {
    if (n < 0 || !Number.isInteger(n)) return "Giai thừa không hợp lệ";
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

function handleCalc(operator: string): void {
    const input1 = document.getElementById("input1") as HTMLInputElement;
    const input2 = document.getElementById("input2") as HTMLInputElement;
    const resultDiv = document.getElementById("result")!;

    const val1 = toNumber(input1.value);
    const val2 = toNumber(input2.value);

    let result: number | string;

    if (operator === '!') {
        if (val1 === null) {
            resultDiv.innerText = "Giá trị không hợp lệ";
            return;
        }
        result = factorial(val1);
    } else {
        if (val1 === null || val2 === null) {
            resultDiv.innerText = "Giá trị không hợp lệ";
            return;
        }

        switch (operator) {
            case '+': result = add(val1, val2); break;
            case '-': result = subtract(val1, val2); break;
            case '*': result = multiply(val1, val2); break;
            case '/': result = divide(val1, val2); break;
            case '^': result = power(val1, val2); break;
            case '√': result = sqrt(val1, val2); break;
            default: result = "Phép toán không hỗ trợ";
        }
    }

    resultDiv.innerText = "Kết quả: " + result;
}
