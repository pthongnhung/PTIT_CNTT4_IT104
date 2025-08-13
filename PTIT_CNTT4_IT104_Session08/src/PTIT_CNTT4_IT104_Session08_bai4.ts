function mergeObject< T extends object, U extends Object > (a: T, b:U): T & U{
    return {...a,...b}
}
const user = { id: 1, name: "Alice", age: 20 };
const acc = { name: "Bob", active: true };
const merge = mergeObject(user, acc);
console.log(merge);
