import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Modal, Button } from "antd";
import { NewContractForm } from "./Form";

const createNewIcon = (
  <span className="iconLeft fa-layers fa-fw">
    <FontAwesomeIcon icon={faPlus} />
  </span>
);

export const NewContractModal = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    if (width > 990) {
      return { width: 900, height };
    } else if (width > 768) {
      return { width: 600, height };
    }
    return { width, height };
  };

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      const handleResize = () => setWindowDimensions(getWindowDimensions());

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  };

  const { width } = useWindowDimensions();

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {createNewIcon} Crear nuevo contrato
      </Button>
      <Modal
        // className="modal"
        title={
          <>
            <h4 style={{ color: "#656565" }}>
              Formulario de Creación de contratos
            </h4>{" "}
            <h4 style={{ textAlign: "right" }}>
              Código Interno: <b>MNCC3456789</b>
            </h4>
          </>
        }
        centered
        style={{ width: (80 * width) / 100, minWidth: (80 * width) / 100 }}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={900}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={confirmLoading}
            onClick={handleOk}>
            Crear
          </Button>,
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
        ]}>
        <NewContractForm handleOk={handleOk} />
        {/* <p>{modalText}</p> */}
      </Modal>
    </>
  );
};
