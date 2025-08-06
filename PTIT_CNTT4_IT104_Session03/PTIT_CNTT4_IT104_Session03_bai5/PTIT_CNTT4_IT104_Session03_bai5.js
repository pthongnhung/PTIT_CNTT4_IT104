var firstName = "john";
var lastName = "doe";
function capitalize(word) {
    if (word.length == 0)
        return "";
    return word[0].toUpperCase() + word.slice(1);
}
firstName = capitalize(firstName);
lastName = capitalize(lastName);
var fullName = "".concat(firstName, " ").concat(lastName);
console.log(fullName);
