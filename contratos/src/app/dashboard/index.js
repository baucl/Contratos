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

import { useTranslation } from "react-i18next";

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
  const { i18n, t } = useTranslation();

  const [language, setLanguage] = useState("Language");

  const handleLangSelect = eventKey => {
    if (eventKey === "es") {
      setLanguage(t("navbar-spanish-lang"));
      i18n.changeLanguage(eventKey);
    } else {
      setLanguage(t("navbar-english-lang"));
      i18n.changeLanguage("en");
    }
  };

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
                  {t("navbar-link-1")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-nav-item" to="/contratos">
                  {t("navbar-link-2")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="header-nav-item" to="/contratistas">
                  {t("navbar-link-3")}
                </Link>
              </li>
              <li className="justify-content-end profile-logout">
                <NavDropdown
                  title={language}
                  id="navbarScrollingDropdown"
                  activeKey="en"
                  onSelect={handleLangSelect}>
                  <NavDropdown.Item eventKey="en">
                    {t("navbar-english-lang")}
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="es">
                    {t("navbar-spanish-lang")}
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item> */}
                </NavDropdown>
              </li>
              <li className="justify-content-end">
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
      <div>
        <div style={{ marginLeft: "auto" }}>
          <h3 className="company-name">
            Empresa Industrial de recursos naturales – Resumen de actividad de
            contratos
          </h3>
          <div className="col-12">
            <input
              onChange={handleDisplayFileDetails}
              ref={inputRef}
              className="d-none"
              type="file"
            />
            <div className="py-2">
              <div className="d-flex justify-content-end">
                <Button
                  onClick={handleUpload}
                  variant="warning"
                  className="text-white col-xs-12 col-sm-4 col-md-2 col-lg-2">
                  {uploadedFileName ? (
                    uploadedFileName
                  ) : (
                    <>Carga Masiva contratos {massiveUploadIcon}</>
                  )}
                </Button>
                <Button
                  className="col-12 col-xs-12 col-sm-4 col-md-2 col-lg-2"
                  type="submit"
                  variant="primary"
                  onClick={handleShow}>
                  {newContractIcon} Crear nuevo contrato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <div className="col-12">
          <TabsLayout />
          <div>{children}</div>
          <div className="footer">
            <div className="text-center">
              <i className="fab fa-facebook-f"></i>Unilink
            </div>
          </div>
          <NewContractModalForm show={show} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
};

export default IndexPage;
