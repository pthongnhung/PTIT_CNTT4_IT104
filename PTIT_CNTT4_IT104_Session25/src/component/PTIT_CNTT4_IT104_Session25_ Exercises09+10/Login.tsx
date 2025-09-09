// src/pages/Login.tsx
import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type Values = { email: string; password: string };
type User = { id: number; email: string; password: string; createdAt?: string };

const getUsers = (): User[] => {
  try {
    const raw = localStorage.getItem("users");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export default function Login() {
  const [form] = Form.useForm<Values>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { email?: string } };

  // Auto-fill email nếu điều hướng từ Register
  useEffect(() => {
    if (state?.email) form.setFieldsValue({ email: state.email });
  }, [state, form]);

  const onFinish = async (values: Values) => {
    setLoading(true);
    try {
      const users = getUsers();
      const found = users.find(
        (u) =>
          u.email.trim().toLowerCase() === values.email.trim().toLowerCase() &&
          u.password === values.password
      );

      if (!found) {
        message.error("Sai email hoặc mật khẩu");
        return;
      }

      localStorage.setItem(
        "currentUser",
        JSON.stringify({ id: found.id, email: found.email })
      );
      message.success("Đăng nhập thành công!");
      navigate("/", { replace: true }); // chuyển về Home
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#f5f7fb",
      }}
    >
      <Card style={{ width: 420 }} bodyStyle={{ padding: 24 }}>
        <Title
          level={3}
          style={{ textAlign: "center", fontWeight: 700, marginBottom: 24 }}
        >
          Login account
        </Title>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          onFinish={onFinish}
        >
          <Form.Item
            label="Your email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input
              size="large"
              placeholder="name@company.com"
              prefix={<MailOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password size="large" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={loading}
            >
              Login an account
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>Don’t have an account? </Text>
          <Link to="/register">Register here</Link>
        </div>
      </Card>
    </div>
  );
}
