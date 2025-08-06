var input = "hello world";
var result = "";
for (var i = 0; i < input.length; i++) {
    var c = input[i];
    if (result.indexOf(c) === -1) {
        result += c;
    }
}
console.log(result);
