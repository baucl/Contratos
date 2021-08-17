import React from "react";
import ValorContratos from "../../../components/Index/ValorContratos";
import { Divider } from "antd";
import CantidadContratos from "../../../components/Index/CantidadContratos";

const Index = () => {
  return (
    <div>
      <Divider
        orientation="left"
        style={{ borderTopColor: "rgb(0 0 0 / 14%)" }}
      >
        Contratos
      </Divider>
      <ValorContratos />
      <Divider />
      <CantidadContratos />
    </div>
  );
};

export default Index;
