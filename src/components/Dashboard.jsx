/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { ConfigProvider, Grid, Layout, theme } from "antd";
import { Navigation, Header } from "./index";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const Dashboard = () => {
  const screens = useBreakpoint();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") navigate("/tasks/");
    else if (pathname[pathname.length - 1] !== "/") navigate(`${pathname}/`);
  }, [pathname]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4670FF",
          fontFamily: "Inter",
        },
        components: {
          Menu: { itemHeight: 48, itemMarginBlock: "8px 4px" },
          Button: {
            defaultColor: "#0B1466",
          },
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Navigation />
        <Layout
          style={{
            marginInlineStart: screens.xl ? 264 : 60,
          }}
        >
          <Header />
          <Content>
            <div
              style={{
                padding: 24,
                minHeight: "100%",
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            {new Date().getFullYear()} Created by{" "}
            <a href="mailto:ivashko.yevheniy@gmail.com">Yevheniy Ivashko</a>
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Dashboard;
