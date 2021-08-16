import React from "react";
import "../../index.css";
import "antd/dist/antd.css";
import IndexPage from "../../app/dashboard";
import Routes from "../../app/index";

const AppLayout = () => (
  <IndexPage>
    <Routes />
  </IndexPage>
);

export default AppLayout;
