function mergeObject(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const user = { id: 1, name: "Alice", age: 20 };
const acc = { name: "Bob", active: true };
const merge = mergeObject(user, acc);
console.log(merge);
