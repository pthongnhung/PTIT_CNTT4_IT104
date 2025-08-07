//Mang chua danh sach sinh vien
let students = [];
//tao ham them thong tin sinh vien
function addStudent(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject
    };
    students.push(newStudent);
}
addStudent(1, "Nhung", 20, [{ subjectName: "C", score: 8 }]);
addStudent(2, "Hong", 20, [{ subjectName: "C", score: 7 }]);
//Ham hien thi thong tin sinh vien
function printStudent() {
    for (let i = 0; i < students.length; i++) {
        console.log(`Thong tin sinh vien thu ${i + 1}: Name ${students[i].name}`);
    }
}
//Ham cap nhat thong tin sinh vien
function updateStudent(id) {
    //kiem tra xem id co ton tai hay khong
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == id) {
            const newName = prompt("Nhap ten moi: ");
            const newAge = Number(prompt("Nhap tuoi moi: "));
            const subjectName = prompt("Nhap ten mon hoc: ");
            const score = prompt("Nhap diem mon hoc: ");
            students[i].name = newName;
            students[i].age = newAge;
        }
    }
}
//ham xoa sinh vien
function deleteStudent(id) {
    //kiem tra xem id co ton tai hay khong
}
