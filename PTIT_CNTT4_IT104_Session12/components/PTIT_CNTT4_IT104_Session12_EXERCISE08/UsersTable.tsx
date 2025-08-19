import React from "react";
import "./UsersTable.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export type Gender = "Nam" | "Nữ";
export interface User {
  id: number;
  fullName: string;
  dob: string;     
  gender: Gender;
  address: string;
}

const users: User[] = [
  { id: 1, fullName: "Malcolm Lockyer", dob: "1961-03-21", gender: "Nam", address: "New york" },
  { id: 2, fullName: "Maria", dob: "1990-02-11", gender: "Nữ",  address: "London"  },
];

export default function UsersTable() {
  const handleEdit = (u: User) => {
    alert(`Sửa: ${u.fullName}`);
  };

  const handleDelete = (u: User) => {
    const ok = confirm(`Xóa người dùng: ${u.fullName}?`);
    if (ok) alert("Đã xóa (demo)");
  };

  return (
    <div className="card">
      <table className="table">
        <TableHeader />
        <tbody>
          {users.map((u, idx) => (
            <TableRow
              key={u.id}
              index={idx + 1}
              user={u}
              onEdit={() => handleEdit(u)}
              onDelete={() => handleDelete(u)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
