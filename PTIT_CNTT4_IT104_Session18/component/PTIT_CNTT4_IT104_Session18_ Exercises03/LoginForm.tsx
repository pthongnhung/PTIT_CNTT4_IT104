import React, { useState, useCallback } from "react";

type FormState = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form, setForm] = useState<FormState>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log({
        email: form.email,
        password: form.password,
      });
    },
    [form.email, form.password]
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320 }}>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="nva@gmail.com"
        />
      </label>

      <br />

      <label>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="*******"
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
