import React from 'react'
import "./UserInfo.css"; 

type Gender = "Nam" | "Nữ" ;

interface User {
  fullName: string;
  gender: Gender;
  dob: string;     
  email: string;
  address: string;
}

export default function UserInfo() {
  const user: User = {
    fullName: "Nguyễn Văn A",
    gender: "Nam",
    dob: "06/03/2024",
    email: "nva@gmail.com",
    address: "Thanh Xuân, Hà Nội",
  };

  return (
    <div className="user-info">
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <strong>{user.fullName}</strong>
        </li>
        <li>
          Giới tính: <strong>{user.gender}</strong>
        </li>
        <li>
          Ngày sinh: <strong>{user.dob}</strong>
        </li>
        <li>
          Email: <strong>{user.email}</strong>
        </li>
        <li>
          Địa chỉ: <strong>{user.address}</strong>
        </li>
      </ul>
    </div>
  );
}
 
