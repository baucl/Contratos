import React, { useState } from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { Searcher } from "../Searcher";

export const TabsLayout = () => {
  const [key, setKey] = useState("contract");

  return (
    <div className="px-5">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        defaultActiveKey="contract"
      >
        <Tab
          eventKey="contract"
          key="1"
          title="Buscar contrato por nombre o proveedor"
        >
          <Searcher tabName="contrato" />
        </Tab>
        <Tab eventKey="company" key="2" title="Buscar por compañía">
          <Searcher tabName="compañía" />
        </Tab>
        <Tab eventKey="gerency" key="3" title="Buscar por gerencia">
          <Searcher tabName="gerencia" />
        </Tab>
        <Tab eventKey="vp" key="4" title="Buscar por VP">
          <Searcher tabName="VP" />
        </Tab>
        <Tab eventKey="faena" key="5" title="Buscar por faena">
          <Searcher tabName="faena" />
        </Tab>
      </Tabs>
    </div>
  );
};
