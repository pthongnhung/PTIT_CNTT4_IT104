type Person = {
    name: string,
    age: number
};
type Employee = {
    employeeId: string,
    department: string
};
type StaffMember = Person & Employee;
const staff1: StaffMember = {
name: "Nguyễn Văn A",
  age: 28,
  employeeId: "EMP001",
  department: "Kế toán"
}

function printStaffInfo(staff:StaffMember) {
     console.log(
    `Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng: ${staff.department}`
    );
}
printStaffInfo(staff1);