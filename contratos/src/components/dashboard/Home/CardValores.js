import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDollarCircle } from "react-icons/ai";

const CardContratos = () => {
  return (
    <Container>
      <Row lg={12}>
        <Col xl={6} sm={6} md={6} xs={12} className="mb-2">
          <Card className="text-center bg-light" style={{backgroundColor: "#1f365c"}}>
            <Card.Body>
              <AiOutlineDollarCircle color="#5d76af" size={30} />
              <Card.Title>$ 63,218,263.00 USD</Card.Title>
              <Card.Text>Valor total de los contratos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6} sm={6} md={6} xs={12} className="mb-2">
          <Card className="text-center bg-light">
            <Card.Body>
              <AiOutlineDollarCircle color="#5d76af" size={30} />
              <Card.Title>$ 189,654,789.00 USD</Card.Title>
              <Card.Text>Valor anulizado de los contratos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardContratos;
