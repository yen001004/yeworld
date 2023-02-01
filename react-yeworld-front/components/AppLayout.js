import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const menuItems = [
    {
      key: "home",
      label: (
        <Link legacyBehavior href="/">
          <a>에옹월드</a>
        </Link>
      ),
    },
    {
      key: "profile",
      label: (
        <Link legacyBehavior href="/profile">
          <a>프로필</a>
        </Link>
      ),
    },
    {
      key: "signup",
      label: (
        <Link legacyBehavior href="/signup">
          <a>회원가입</a>
        </Link>
      ),
    },
  ];
  return (
    <div>
      <Menu mode="horizontal" items={menuItems} />
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://ye-ong.notion.site/f074983731244134851bbced4b18d1bf"
            target="_blank"
            rel="noreferrer noopener"
          >
            made by Yen
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
