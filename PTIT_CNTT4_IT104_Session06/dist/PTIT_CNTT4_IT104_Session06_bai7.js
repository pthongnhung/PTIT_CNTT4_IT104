class Student$ {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `ID: ${this.id}, Tên: ${this.name}`;
    }
    setName(newName) {
        if (newName && newName.length > 0)
            this.name = newName;
    }
}
const allStudents$ = [];
class Classroom$ {
    constructor() {
        this.students$ = [];
    }
    showStudents() {
        if (this.students$.length === 0) {
            console.log("Không có học sinh trong lớp");
        }
        else {
            this.students$.forEach((student, index) => {
                console.log(`${index + 1}. ${student.getInfo()}`);
            });
        }
    }
    addStudent(student) {
        this.students$.push(student);
    }
    filterStudent(id) {
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
    addStudentInClass(studentId) {
        const index = allStudents$.findIndex(s => s.getId() === studentId);
        if (index !== -1) {
            const student = allStudents$.splice(index, 1)[0];
            this.addStudent(student);
            console.log(`Đã thêm ${student.getInfo()} vào lớp`);
        }
        else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong danh sách allStudents`);
        }
    }
    removeStudent(studentId) {
        const idx = this.students$.findIndex(s => s.getId() === studentId);
        if (idx !== -1) {
            const student = this.students$.splice(idx, 1)[0];
            allStudents$.push(student);
            console.log(`Đã chuyển ${student.getInfo()} từ lớp về allStudents`);
        }
        else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong lớp`);
        }
    }
    editStudent(studentId, newName) {
        const student = this.students$.find(s => s.getId() === studentId);
        if (student) {
            student.setName(newName);
            console.log(`Đã cập nhật: ${student.getInfo()}`);
        }
        else {
            console.log(`Không tìm thấy học sinh với id = ${studentId} trong lớp`);
        }
    }
}
allStudents$.push(new Student$(1, "Nguyễn Văn A"), new Student$(2, "Trần Thị B"), new Student$(3, "Lê Văn C"), new Student$(4, "Phạm Văn D"), new Student$(5, "Vũ Thị E"), new Student$(6, "Hoàng Văn F"));
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
