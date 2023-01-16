import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link legacyBehavior href="/">
          <a>에옹월드</a>
        </Link>
        <Link legacyBehavior href="/profile">
          <a>프로필</a>
        </Link>
        <Link legacyBehavior href="/signup">
          <a>회원가입</a>
        </Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
