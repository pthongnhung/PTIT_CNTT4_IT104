import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: any) => state.user);

  if (!user) return <p>Loading user data...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Thông tin người dùng</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Họ tên:</strong> {user.userName}
      </p>
      <p>
        <strong>Giới tính:</strong> {user.gender}
      </p>
      <p>
        <strong>Ngày sinh:</strong> {user.dateBirth}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {user.address}
      </p>
    </div>
  );
};

export default Profile;
