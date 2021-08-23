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
    <div className="py-3 my-3 border-bottom ">
      <div className="col-12">
        <div className="row">
          <Col sm={3}>
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Name
            </Form.Label>
            <Form.Control
              id="inlineFormInputName"
              placeholder={`Ingresar ${tabName}`}
            />
          </Col>
          <Col>
            <Button
              type="submit"
              variant="success"
              className="col-12 col-xs-12 col-sm-12 col-md-2 col-lg-2"
            >
              Buscar {searchIcon}
            </Button>
          </Col>
        </div>
      </div>
    </div>
  );
};
