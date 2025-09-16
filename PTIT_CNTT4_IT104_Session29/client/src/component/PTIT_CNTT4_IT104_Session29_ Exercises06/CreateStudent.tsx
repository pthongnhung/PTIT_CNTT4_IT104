import axios from "axios";

export async function createStudent() {
  const newStudent = {
    student_name: "hehe",
    email: "hehe@gmail.com",
    address: "Nam Định",
    phone: "123456789",
    create_at: "090909",
    status: true,
  };
    try {
        const res = await axios.post("http://localhost:8080/student", newStudent);
        console.log(`Danh sach sinh vien da duoc them thanh cong `, res.data);
    } catch (error: any) {
        if (error.response) {
            console.error("Server trả về lỗi:", error.response.data);
        } else {
            console.error("Không thể kết nối API:", error.message);
        }
    }
}
