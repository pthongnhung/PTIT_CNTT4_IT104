import React from "react";
import  {User}  from "./UsersTable";

function formatDate(iso: string) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function TableRow({
  index,
  user,
  onEdit,
  onDelete,
}: {
  index: number;
  user: User;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <tr className="tbody-row">
      <td className="center">{index}</td>
      <td>{user.fullName}</td>
      <td>{formatDate(user.dob)}</td>
      <td className="center">{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <div className="actions">
          <button className="btn btn--light" onClick={onEdit}>Sửa</button>
          <button className="btn btn--danger" onClick={onDelete}>Xóa</button>
        </div>
      </td>
    </tr>
  );
}
