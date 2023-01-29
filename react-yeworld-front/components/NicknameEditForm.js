import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const NicknameEditForm = () => {
  return (
    <FormWrap>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </FormWrap>
  );
};

const FormWrap = styled(Form)`
  margin: 12px 6px;
  padding: 6px 0;
`;

export default NicknameEditForm;
