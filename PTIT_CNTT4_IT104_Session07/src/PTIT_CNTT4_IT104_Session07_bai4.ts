abstract class Person{
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
     abstract displayInfo(): void;
}
class Student extends Person{
    private id: number;
    constructor(id: number, name: string) {
        super(name);
        this.id = id;
    }
    public displayInfo(): void {
        console.log(`ma sinh vien: ${this.id}`);
        console.log(`ten sinh vien: ${this.name}`);
    }
}
class Teacher extends Person{
    public subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`ten giao vien ${this.name},mon hoc ${this.subject}`);
        
    }
}
const std = new Student(1, "hnhung");
const teacher = new Teacher("trinh quoc hai", "js");
std.displayInfo();
teacher.displayInfo();
