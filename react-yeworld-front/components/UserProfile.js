import React, { useCallback } from "react";
import { Avatar, Button, Card } from "antd";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="post">
          게시물
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>Y</Avatar>} title="이에옹" />
      <LogOutBtn onClick={onLogOut}>로그아웃</LogOutBtn>
    </Card>
  );
};

const LogOutBtn = styled(Button)`
  margin-left: 40px;
  margin-top: 12px;
`;

export default UserProfile;
