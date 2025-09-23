import React, { useState, type ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { InitialStudentState, Student } from "../utils/types";
import { addStudent, deleteStudent } from "../store/slices/studentSlice";

export default function StudentManager() {
  const [user, setUser] = useState<Student>({
    id: Math.floor(Math.random() * 999),
    name: "",
  });
  const result = useSelector((data: InitialStudentState) => {
    return data.students.students;
  });
  const dispatch: any = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(111, e.target.value);

    setUser({ ...user, name: e.target.value });
  };
  const addNewStudent = () => {
    dispatch(addStudent(user));
  };
  const deleteNewStudent = (user) => {
    dispatch(deleteStudent(user));
  };
  return (
    <div>
      <h1>quan ly sinh vien</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={addNewStudent}>them</button>
      <ul>
        {result.map((item: Student, index: number) => {
          return (
            <div>
              <li key={index}>{item.name}</li>
                  <button onClick={() =>
                      deleteNewStudent(item)}>Xoa</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
