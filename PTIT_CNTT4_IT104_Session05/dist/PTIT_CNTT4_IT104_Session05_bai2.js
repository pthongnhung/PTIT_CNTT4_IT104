class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let arr = [];
const student1 = new Student(1, 20, "nhung@gmail.com");
const student2 = new Student(2, 20, "hong@gmail.com");
arr[0] = student1;
arr[1] = student2;
for (let i = 0; i < arr.length; i++) {
    console.log(`id: ${arr[i].id},age:${arr[i].age},email:${arr[i].email}`);
}
