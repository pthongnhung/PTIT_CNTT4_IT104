
import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

type FormValues = {
  email: string;
  password: string;
  confirm: string;
};

export default function Register() {
  const [form] = Form.useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: FormValues) => {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      console.log("Register:", values);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f7fb",
        padding: 16,
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
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email address" },
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
              { required: true, message: "Please enter a password" },
              { min: 6, message: "At least 6 characters" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="••••••••"
              prefix={<LockOutlined />}
            />
          </Form.Item>

          <Form.Item
            label="Confirm password"
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please confirm your password" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="••••••••"
              prefix={<LockOutlined />}
            />
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
