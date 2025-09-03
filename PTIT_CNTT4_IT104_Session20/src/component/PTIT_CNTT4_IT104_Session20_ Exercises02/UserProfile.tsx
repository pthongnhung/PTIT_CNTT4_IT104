import React, { useState } from "react";

export default function UserProfile() {
  const [formData, setData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Mời bạn nhập tên"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Mời bạn email"
          value={formData.email}
          onChange={handleChange}
        />
        <button
          type="submit"
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Gửi
        </button>
      </form>
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Thông tin đã nhập:</h3>
          <p>
            <strong>Tên:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
        </div>
      )}
    </div>
  );
}
