import React from "react";
import { Link } from "react-router-dom";

import { NavDropdown } from "react-bootstrap";

import UnilinkLogo from "../../images/logo-unilink.png";

const IndexPage = ({ children }) => {
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
      <div>{children}</div>
    </>
  );
};

export default IndexPage;
