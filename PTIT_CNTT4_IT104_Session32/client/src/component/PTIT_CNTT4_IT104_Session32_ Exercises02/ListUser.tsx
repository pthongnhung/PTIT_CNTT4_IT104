
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { User } from "./store/userReducer";

export default function ListUser() {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  const handleEditClick = (user: User) => {
    setEditingUser(user);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingUser) return;
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const handleEditSave = () => {
    if (editingUser) {
      dispatch({ type: "EDIT_USER", payload: editingUser });
      setEditingUser(null);
    }
  };

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {editingUser?.id === user.id ? (
              <>
                <input
                  name="userName"
                  value={editingUser.userName}
                  onChange={handleEditChange}
                />
                <input
                  name="gender"
                  value={editingUser.gender}
                  onChange={handleEditChange}
                />
                <input
                  name="dateBirth"
                  value={editingUser.dateBirth}
                  onChange={handleEditChange}
                />
                <input
                  name="address"
                  value={editingUser.address}
                  onChange={handleEditChange}
                />
                <button onClick={handleEditSave}>Lưu</button>
              </>
            ) : (
              <>
                <strong>{user.userName}</strong> - {user.gender} -{" "}
                {user.dateBirth} - {user.address}
                <button onClick={() => handleEditClick(user)}>Sửa</button>
                <button onClick={() => handleDelete(user.id)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
