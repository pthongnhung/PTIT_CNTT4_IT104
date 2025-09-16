import axios from "axios";
import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  student_name: string;
  address: string;
  phone: string;
  created_at: string;
  status: boolean;
};

export default function Ex0708() {
  const [students, setStudents] = useState<Student[]>([]);
  const [student_name, setStudentName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(true);

  // Lấy danh sách sinh viên từ server
  async function getData() {
    const res = await axios.get("http://localhost:8080/student");
    setStudents(res.data);
  }

  // Thêm sinh viên mới
  async function addNewStudent(student: Omit<Student, "id">) {
    const res = await axios.post("http://localhost:8080/student", student);
    return res.data;
  }

  useEffect(() => {
    getData();
  }, []);

  const handleAddStudent = async () => {
    if (!student_name.trim()) return;

    const newStudent = {
      student_name,
      address,
      phone,
      status,
      created_at: new Date().toISOString().split("T")[0],
    };

    const added = await addNewStudent(newStudent);
    setStudents([...students, added]);

    setStudentName("");
    setAddress("");
    setPhone("");
    setStatus(true);
  };

  const deleteStudent = async (id: number) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    setStudents(students.filter((s) => s.id !== id));
  };

  const updateStudent = async (student: Student) => {
    const newName = prompt("Nhập tên mới:", student.student_name);
    if (!newName || !newName.trim()) return;

    const res = await axios.patch(
      `http://localhost:8080/student/${student.id}`,
      {
        student_name: newName,
      }
    );

    const updatedIndex = students.findIndex((s) => s.id === res.data.id);
    students[updatedIndex] = res.data;
    setStudents([...students]);
  };

  return (
    <div>
      <h1>Danh sách sinh viên</h1>

      <div>
        <input
          type="text"
          placeholder="Tên sinh viên"
          value={student_name}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Địa chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Số điện thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
          Đang hoạt động
        </label>
        <button onClick={handleAddStudent}>Thêm sinh viên</button>
      </div>

      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.student_name} <br />
            {student.address} <br />
            {student.phone} <br />
            {student.created_at} <br />
            Trạng thái: {student.status ? "Hoạt động" : "Không hoạt động"}{" "}
            <br />
            <button onClick={() => deleteStudent(student.id)}>Xoá</button>
            <button onClick={() => updateStudent(student)}>Sửa tên</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
