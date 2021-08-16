import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const IndexPage = ({ children }) => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo-unilink" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Link style={{ textDecoration: "none" }} to="/">
              Dashboard
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link style={{ textDecoration: "none" }} to="/contratos">
              Contratos
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link style={{ textDecoration: "none" }} to="/contratistas">
              Contratistas
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {children}
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 60,
        }}
      >{`©${new Date().getFullYear()} - Unilink`}</Footer>
    </Layout>
  );
};

export default IndexPage;
