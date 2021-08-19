import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const searchIcon = (
  <span className="iconRight fa-layers fa-fw">
    <FontAwesomeIcon icon={faSearch} />
  </span>
);

export const Searcher = ({ tabName }) => {
  return (
    <div style={{ marginLeft: "35px" }}>
      <div>Buscar {tabName}</div>
      <div>
        <Form>
          <Row className="align-items-center">
            <Col sm={3} className="my-1">
              <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                Name
              </Form.Label>
              <Form.Control
                id="inlineFormInputName"
                placeholder={`Ingresar ${tabName}`}
              />
            </Col>
            <Col xs="auto" className="my-1">
              <Button type="submit" variant="success">
                Buscar {searchIcon}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
