import React, { useState } from "react";
export default function Form() {
  const [valuee, setValue] = useState({ name: "", email: "" });
  const [error, setError] = useState({ name: "", email: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") {
      setError({ ...error, [name]: `${name} khong duoc bo trong` });
    } else {
      setError({ ...error, [name]: "" });
    }
    if (value !== "" && name === "email") {
      if (value.includes("@") && value.indexOf("@") !== 0) {
        setError({ ...error, [name]: "" });
      } else {
        setError({ ...error, [name]: `${name} khong dung dinh dang` });
      }
    }
    setValue({ ...valuee, [name]: value });
  };
  return (
    <div>
      <form action="">
        <h2>Dang ky thong tin</h2>
        <label>
          Ho ten:
          <input
            type="text"
            placeholder="Nhap ho ten..."
            name="name"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{error.name}</p>
        </label>
        <br></br>
        <label>
          Email:
          <input
            type="text"
            placeholder="example@gmail"
            name="email"
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{error.email} </p>
          <button>Gui</button>
        </label>
      </form>
    </div>
  );
}
