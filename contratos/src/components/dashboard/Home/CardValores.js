import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineDollarCircle } from "react-icons/ai";

const CardContratos = () => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="mb-2 col-xs-12 col-xl-6 col-sm-6">
          <Card
            className="text-center bg-light"
            style={{ backgroundColor: "#1f365c" }}
          >
            <Card.Body>
              <AiOutlineDollarCircle color="#5d76af" size={30} />
              <Card.Title>$ 63,218,263.00 USD</Card.Title>
              <Card.Text>Valor total de los contratos</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="mb-2 col-xl-6 col-sm-6 col-md-6 col-xs-12">
          <Card className="text-center bg-light">
            <Card.Body>
              <AiOutlineDollarCircle color="#5d76af" size={30} />
              <Card.Title>$ 189,654,789.00 USD</Card.Title>
              <Card.Text>Valor anulizado de los contratos</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CardContratos;
