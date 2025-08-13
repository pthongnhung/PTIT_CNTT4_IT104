function partialUpdate(obj, updates) {
    return Object.assign(Object.assign({}, obj), updates);
}
const result1 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { age: 31 });
console.log(result1);
const result2 = partialUpdate({ name: 'Alice', age: 30, job: 'Developer' }, { name: 'Bob', job: 'Designer' });
console.log(result2);
