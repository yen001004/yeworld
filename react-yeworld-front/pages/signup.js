import { Button, Checkbox, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import {
  SmileOutlined,
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import useInput from "../hooks/useInput";

const Signup = () => {
  const [nickname, onChangeNickname] = useInput("");
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return (
    <AppLayout>
      <FormWrap onFinish={onSubmit}>
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
          <Input
            size="large"
            placeholder="비밀번호 확인"
            prefix={<CheckCircleOutlined />}
            name="user-password-check"
            type="password"
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            required
          />
          {passwordError && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
        </div>
        <TermWrap>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            관리자 에옹 말을 잘 들을 것을 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </TermWrap>
        <Button type="primary" htmlType="submit">
          가입하기
        </Button>
      </FormWrap>
    </AppLayout>
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
`;

const TermWrap = styled.div`
  margin: 10px 0;
`;

const ErrorMessage = styled.div`
  color: red;
`;

export default Signup;
