import React, { useEffect, useState } from "react";
import { GetAllStudent } from "./GetAllStudent";
type Student = {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  create_at: string;
};
export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllStudent();
      setStudents(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Danh sach hoc sinh</h2>
      <ul>
        {students.map((item) => (
          <li key={item.id}>
            {item.student_name}
            {item.email}
            {item.address}
            {item.status}
            {item.create_at}
          </li>
        ))}
      </ul>
    </div>
  );
}
