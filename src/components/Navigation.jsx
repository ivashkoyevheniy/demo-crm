import React from "react";
import {
  UnorderedListOutlined,
  UserOutlined,
  FileOutlined,
  MessageOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Grid, Layout, Menu, Typography } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;
const { Title } = Typography;
const { useBreakpoint } = Grid;

const getItem = (label, key, icon, children) => ({
  key: label === "Logout" ? null : key,
  icon,
  children,
  label:
    label === "Logout" ? (
      label
    ) : (
      <NavLink to={`/${label.toLowerCase()}/`}>{label}</NavLink>
    ),
});

const topItems = [
  ["Tasks", <UnorderedListOutlined />],
  ["Accounts", <UserOutlined />],
  ["Applications", <FileOutlined />],
  ["Chat", <MessageOutlined />],
  ["Requests", <MailOutlined />],
];

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const bottomItems = [["Settings", <SettingOutlined />]];

const getNavigationItems = (array) =>
  array.map((item) => getItem(item[0], `/${item[0].toLowerCase()}/`, item[1]));

function Navigation() {
  const { pathname } = useLocation();
  const screens = useBreakpoint();

  const NavigationMenu = ({ items }) => (
    <Menu
      theme="dark"
      mode="inline"
      items={getNavigationItems(items)}
      defaultSelectedKeys={pathname}
    />
  );

  return (
    <Sider breakpoint="xl" collapsedWidth="60" width={264} style={siderStyle}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            className="logo-vertical"
            style={!screens.xl ? { justifyContent: "center" } : null}
          >
            <img alt="Logo" src={process.env.PUBLIC_URL + "/logo.svg"} />
            {screens.xl ? (
              <Title
                level={5}
                style={{ margin: 0, color: "#fff", paddingLeft: 6 }}
              >
                Lend Us
              </Title>
            ) : null}
          </div>
          <NavigationMenu items={topItems} />
        </div>
        <div>
          <NavigationMenu items={bottomItems} />
          <div style={{ margin: "0 4px" }}>
            <Button
              type="link"
              onClick={(e) => e.preventDefault()}
              className="menu-item-btn"
              style={
                !screens.xl ? { padding: 0, justifyContent: "center" } : null
              }
            >
              <span>
                <LogoutOutlined />
              </span>
              {screens.xl ? <span>Logout</span> : null}
            </Button>
          </div>
        </div>
      </div>
    </Sider>
  );
}

export default Navigation;
