//thong tin 1 mon hoc
type Subject={
    subjectName: string,
    score: number | string
}
//thong tin mot sinh vien
type Student={
    id: number,
    name: string,
    age: number,
    subject:Subject[]
}
//Mang chua danh sach sinh vien
let students: Student[] = [];
//tao ham them thong tin sinh vien
function addStudent(id:number,name:string,age:number,subject:Subject[]) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject:subject
    }
    students.push(newStudent);
}
addStudent(1, "Nhung", 20, [{ subjectName: "C", score: 8 }])
addStudent(2,"Hong",20,[{subjectName:"C",score:7}])
//Ham hien thi thong tin sinh vien
function printStudent():void {
    for (let i = 0; i < students.length; i++){
        console.log(`Thong tin sinh vien thu ${i+1}: Name ${students[i].name}`);
    }
}
//Ham cap nhat thong tin sinh vien
function updateStudent(id:number) {
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
function deleteStudent(id:number) {
    //kiem tra xem id co ton tai hay khong
}