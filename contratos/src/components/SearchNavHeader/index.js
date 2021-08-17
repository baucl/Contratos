import React from "react";

import { Tabs, Button, Upload, message, Input } from "antd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faSearch } from "@fortawesome/free-solid-svg-icons";
import { NewContractModal } from "../NewContract/Modal";

const { TabPane } = Tabs;

const massiveUploadIcon = (
  <span className="iconRight fa-layers fa-fw">
    <FontAwesomeIcon icon={faUpload} />
  </span>
);

const searchIcon = (
  <span className="iconRight fa-layers fa-fw">
    <FontAwesomeIcon icon={faSearch} />
  </span>
);

const uploadButtonProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const uploadButton = (
  <div style={{ display: "inline-block" }}>
    <Upload {...uploadButtonProps}>
      <Button type="primary">Carga Masiva contratos {massiveUploadIcon}</Button>
    </Upload>
  </div>
);

const operations = (
  <>
    {uploadButton}
    <NewContractModal />
  </>
);

const navLinks = [
  "Buscar contrato por nombre o proveedor",
  "Buscar por compañía",
  "Buscar por gerencia",
  "Buscar por VP",
  "Buscar por faena",
];

export const SearchNavHeader = () => {
  return (
    <>
      <h3 className="company-name">
        Empresa Industrial de recursos naturales – Resumen de actividad de
        contratos
      </h3>
      <Tabs tabBarGutter={5} tabBarExtraContent={operations}>
        {navLinks.map((tabName, idx) => (
          <TabPane tab={tabName} key={idx}>
            <div style={{ marginBottom: "10px" }}>Content of {tabName}</div>
            <div>
              <Input
                style={{ width: "200px", border: "1px solid #ccc" }}
                id="success"
              />
              <Button
                style={{
                  marginLeft: "25px",
                  color: "white",
                  backgroundColor: "#5cb85c",
                }}
                className="primary"
                onClick={() => console.log("buscar")}>
                Buscar {searchIcon}
              </Button>
            </div>
          </TabPane>
        ))}
        {/* <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane> */}
      </Tabs>
    </>
  );
};
