import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { NavDropdown } from "react-bootstrap";

import { TabsLayout } from "../../components/TabsLayout";

import UnilinkLogo from "../../images/logo-unilink.png";

import Button from "react-bootstrap/Button";
import { Input } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { NewContractModalForm } from "../../components/NewContractModalForm";

const massiveUploadIcon = (
  <span className="iconRight fa-layers fa-fw">
    <FontAwesomeIcon icon={faUpload} />
  </span>
);

const newContractIcon = (
  <span className="iconRight fa-layers fa-fw">
    <FontAwesomeIcon icon={faPlus} />
  </span>
);

const IndexPage = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const inputRef = useRef(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };
  const handleDisplayFileDetails = () => {
    inputRef.current?.files &&
      setUploadedFileName(inputRef.current.files[0].name);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-unilink header-nav">
        <div className="container-fluid">
          <img className="logo-nav-bar" src={UnilinkLogo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 header-nav-item-containers">
              <li className="nav-item">
                <Link className="header-nav-item" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-nav-item" to="/contratos">
                  Contratos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-nav-item" to="/contratistas">
                  Contratistas
                </Link>
              </li>
              <li className="justify-content-end profile-logout">
                <NavDropdown title="Albert Folch" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Change Password
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Logout</NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item> */}
                </NavDropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h3 className="company-name">
        Empresa Industrial de recursos naturales – Resumen de actividad de
        contratos
      </h3>
      <div style={{ display: "flex" }}>
        {children}
        {/* <Button
          style={{ color: "white", marginLeft: "auto" }}
          className="Botones"
          type="submit"
          variant="warning">
          Carga Masiva contratos {massiveUploadIcon}
        </Button> */}
        <div style={{ marginLeft: "auto" }}>
          <input
            onChange={handleDisplayFileDetails}
            ref={inputRef}
            className="d-none"
            type="file"
          />
          <button
            onClick={handleUpload}
            className="btn btn-warning"
            style={{ color: "white" }}>
            {uploadedFileName ? (
              uploadedFileName
            ) : (
              <>Carga Masiva contratos {massiveUploadIcon}</>
            )}
          </button>
        </div>
        {/* <input
          style={{ color: "white", marginLeft: "auto" }}
          className="btn btn-warning"
          type="file"
          // variant="warning"
        >
          Carga Masiva contratos {massiveUploadIcon}
        </input> */}
        <Button
          style={{ color: "white" }}
          type="submit"
          variant="primary"
          onClick={handleShow}>
          {newContractIcon} Crear nuevo contrato
        </Button>
        <NewContractModalForm show={show} handleClose={handleClose} />
      </div>
      <TabsLayout />
    </>
  );
};

export default IndexPage;
