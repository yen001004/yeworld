import { Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { SmileOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

const Signup = () => {
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {}, []);
  return (
    <AppLayout>
      <div>회원가입 페이지</div>
      <Form onFinish={onSubmit}>
        <div>
          <Input
            size="large"
            placeholder="닉네임"
            prefix={<SmileOutlined />}
            name="user-nickname"
            value={nickname}
            onChange={onChangeNickname}
            required
          />
          <Input
            size="large"
            placeholder="아이디"
            prefix={<UserOutlined />}
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          />
          <Input
            size="large"
            placeholder="비밀번호"
            prefix={<LockOutlined />}
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
