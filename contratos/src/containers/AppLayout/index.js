import React from "react";
import "../../index.css";
import IndexPage from "../../app/dashboard";
import Routes from "../../app/index";

const AppLayout = () => (
  <IndexPage>
    <Routes />
  </IndexPage>
);

export default AppLayout;
