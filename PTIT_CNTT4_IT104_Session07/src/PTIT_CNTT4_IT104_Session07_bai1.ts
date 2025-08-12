class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
     printInfo(): void{
        console.log(`ten: ${this.name},ten cong ty: ${this.company}, sdt:${this.phone}}`);
    }
}
class Manager extends Employee{
    teamSize: number;
    constructor(name:string,company:string,phone:string,teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
     override printInfo(): void {
         super.printInfo();
          console.log(`Số lượng thành viên: ${this.teamSize}`);
     }
}
const emp = new Employee("Nguyễn Văn A", "ABC Corp", "0123456789");
emp.printInfo();

const manager = new Manager("Trần Văn B", "XYZ Corp", "0987654321", 10);
manager.printInfo();
