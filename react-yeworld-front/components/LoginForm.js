import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginAction } from "../reducers/user";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    <div>
      <FormWrap onFinish={onSubmitForm}>
        <div>
          <Input
            size="large"
            placeholder="아이디"
            prefix={<UserOutlined />}
            name="user-id"
            value={id}
            onChange={onChangeId}
            required
          />
        </div>
        <div>
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
        <div>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link legacyBehavior href="/signup">
            <a>회원가입</a>
          </Link>
        </div>
      </FormWrap>
    </div>
  );
};

const FormWrap = styled(Form)`
  margin: 12px 6px;

  .ant-input-affix-wrapper-lg {
    margin: 4px 0;
  }
  Button {
    margin: 4px 0;
    margin-right: 16px;
  }

  a {
    color: black;
  }
`;

export default LoginForm;
