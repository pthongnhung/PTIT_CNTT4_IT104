class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`ten: ${this.name},ten cong ty: ${this.company}, sdt:${this.phone}}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`Số lượng thành viên: ${this.teamSize}`);
    }
}
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
emp.printInfo();
const manager = new Manager("Trần Văn B", "XYZ Corp", "0987654321", 10);
manager.printInfo();
