import React, { useState } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type Values = { email: string; password: string; confirm: string };
type User = { id: number; email: string; password: string; createdAt: string };

export default function Register() {
  const [form] = Form.useForm<Values>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getUsers = (): User[] => {
    try {
      return JSON.parse(localStorage.getItem("users") || "[]");
    } catch {
      return [];
    }
  };
  const saveUsers = (arr: User[]) =>
    localStorage.setItem("users", JSON.stringify(arr));

  const onFinish = async (values: Values) => {
    setLoading(true);
    try {
      const users = getUsers();
      const exists = users.some(
        (u) => u.email.toLowerCase() === values.email.toLowerCase()
      );
      if (exists) {
        message.error("Email đã tồn tại!");
        return;
      }
      const newUser: User = {
        id: Date.now(),
        email: values.email.trim(),
        password: values.password,
        createdAt: new Date().toISOString(),
      };
      saveUsers([...users, newUser]);
      message.success("Đăng ký thành công! Mời bạn đăng nhập.");
      navigate("/login", { replace: true, state: { email: values.email } });
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
          Create account
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
              { required: true, message: "Không được để trống email" },
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
            hasFeedback
            rules={[
              { required: true, message: "Không được để trống mật khẩu" },
              { min: 6, message: "Ít nhất 6 ký tự" },
            ]}
          >
            <Input.Password size="large" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Nhập lại mật khẩu" },
              ({ getFieldValue }) => ({
                validator(_, v) {
                  if (!v || getFieldValue("password") === v)
                    return Promise.resolve();
                  return Promise.reject(
                    new Error("Mật khẩu nhập lại không khớp")
                  );
                },
              }),
            ]}
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
              Create an account
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>Already have an account? </Text>
          <Link to="/login">Login here</Link>
        </div>
      </Card>
    </div>
  );
}
