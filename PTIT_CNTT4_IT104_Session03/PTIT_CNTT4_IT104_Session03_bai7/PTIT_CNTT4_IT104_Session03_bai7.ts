let input: string = "hello world";
let result: string = "";

for (let i = 0; i < input.length; i++) {
    let c = input[i];
    if (result.indexOf(c) === -1) {
        result += c;
    }
}

console.log(result); 
