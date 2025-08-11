class Student$ {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    public getId(): number {
        return this.id;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Tên: ${this.name}`;
    }

    public setName(newName: string): void {
        if (newName && newName.length > 0) this.name = newName;
    }
}

const allStudents$: Student$[] = [];

class Classroom$ {
    public students$: Student$[] = [];

    public showStudents(): void {
        if (this.students$.length === 0) {
            console.log("Không có học sinh trong lớp");
        } else {
            this.students$.forEach((student, index) => {
                console.log(`${index + 1}. ${student.getInfo()}`);
            });
        }
    }

    public addStudent(student: Student$): void {
        this.students$.push(student);
    }

    public filterStudent(id: number): void {
        let found = false;
        for (const student of this.students$) {
            if (student.getId() === id) {
                console.log(`Tìm thấy: ${student.getInfo()}`);
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(`Không tìm thấy học sinh với id = ${id}`);
        }
    }

    public addStudentInClass(studentId: number): void {
        const index = allStudents$.findIndex(s => s.getId() === studentId);
        if (index !== -1) {
            const student = allStudents$.splice(index, 1)[0];
            this.addStudent(student);
            console.log(`Đã thêm ${student.getInfo()} vào lớp`);
        } else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong danh sách allStudents`);
        }
    }

    public removeStudent(studentId: number): void {
        const idx = this.students$.findIndex(s => s.getId() === studentId);
        if (idx !== -1) {
            const student = this.students$.splice(idx, 1)[0];
            allStudents$.push(student);
            console.log(`Đã chuyển ${student.getInfo()} từ lớp về allStudents`);
        } else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong lớp`);
        }
    }

    public editStudent(studentId: number, newName: string): void {
        const student = this.students$.find(s => s.getId() === studentId);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật: ${student.getInfo()}`);
        } else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong lớp`);
        }
    }
}

allStudents$.push(
    new Student$(1, "Nguyễn Văn A"),
    new Student$(2, "Trần Thị B"),
    new Student$(3, "Lê Văn C"),
    new Student$(4, "Phạm Văn D"),
    new Student$(5, "Vũ Thị E"),
    new Student$(6, "Hoàng Văn F")
);

const class1$ = new Classroom$();
const class2$ = new Classroom$();

class1$.addStudentInClass(1);
class1$.addStudentInClass(2);
class1$.addStudentInClass(3);

class2$.addStudentInClass(4);
class2$.addStudentInClass(5);
class2$.addStudentInClass(6);

class1$.showStudents();

class1$.editStudent(2, "Trần Thị Z");
class1$.showStudents();

class1$.removeStudent(3);
class1$.showStudents();
allStudents$.forEach(s => console.log(s.getInfo()));
