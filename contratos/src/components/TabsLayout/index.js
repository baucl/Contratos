import React, { useState } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { Searcher } from "../Searcher";

export const TabsLayout = () => {
  const [key, setKey] = useState("contract");

  return (
    <div style={{ marginLeft: "15px" }}>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
        defaultActiveKey="contract"
        className="mb-3">
        <Tab
          eventKey="contract"
          id="1"
          title="Buscar contrato por nombre o proveedor">
          <Searcher tabName="contrato" />
        </Tab>
        <Tab eventKey="company" id="2" title="Buscar por compañía">
          <Searcher tabName="compañía" />
        </Tab>
        <Tab eventKey="gerency" id="3" title="Buscar por gerencia">
          <Searcher tabName="gerencia" />
        </Tab>
        <Tab eventKey="vp" id="4" title="Buscar por VP">
          <Searcher tabName="VP" />
        </Tab>
        <Tab eventKey="faena" id="5" title="Buscar por faena">
          <Searcher tabName="faena" />
        </Tab>
      </Tabs>
    </div>
  );
};
