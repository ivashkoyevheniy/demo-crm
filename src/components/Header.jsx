import React from "react";
import { Layout, theme } from "antd";
import Breadcrumb from "./Breadcrumb";

const AntHeader = Layout.Header;

function Header() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <AntHeader
      style={{
        padding: "16px 24px",
        background: colorBgContainer,
      }}
    >
      <Breadcrumb />
    </AntHeader>
  );
}

export default Header;
