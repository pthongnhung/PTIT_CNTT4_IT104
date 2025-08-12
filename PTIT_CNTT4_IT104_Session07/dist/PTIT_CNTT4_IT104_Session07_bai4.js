class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`ma sinh vien: ${this.id}`);
        console.log(`ten sinh vien: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`ten giao vien ${this.name},mon hoc ${this.subject}`);
    }
}
const std = new Student(1, "hnhung");
const teacher = new Teacher("trinh quoc hai", "js");
std.displayInfo();
teacher.displayInfo();
