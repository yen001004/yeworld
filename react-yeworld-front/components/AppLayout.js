import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link legacyBehavior href="/">
            <a>에옹월드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link legacyBehavior href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link legacyBehavior href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
