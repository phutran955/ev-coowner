import React from "react";
import { Input, Button, Typography, Form, Divider } from "antd";

const { Text } = Typography;

function RegisterForm({ onSubmit }) {
  return (
    <div className="signup-container">
      <div className="signup-right">
        <div className="signup-form-box">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <Text style={{ color: "#bbb" }}>Join with us now</Text>
          </div>

          <Form layout="vertical" onFinish={onSubmit}>
            
            {/* Full Name */}
            <Form.Item
              label={<span style={{ color: "white" }}>Full Name</span>}
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input placeholder="Enter full name" />
            </Form.Item>

            {/* Email */}
            <Form.Item
              label={<span style={{ color: "white" }}>Email</span>}
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Invalid email format" },
              ]}
            >
              <Input placeholder="Enter email" />
            </Form.Item>

            {/* Password */}
            <Form.Item
              label={<span style={{ color: "white" }}>Password</span>}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password placeholder="Enter password" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                style={{ backgroundColor: "#3CB371", borderColor: "#3CB371" }}
              >
                Sign Up
              </Button>
            </Form.Item>

            <Divider style={{ borderColor: "#444" }} />

            <div style={{ textAlign: "center" }}>
              <Text style={{ color: "#bbb" }}>
                Already have an account?{" "}
                <a href="/login" style={{ color: "#3CB371" }}>
                  Sign in
                </a>
              </Text>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
