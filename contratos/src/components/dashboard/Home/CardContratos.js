import React from "react";
import { useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  AiOutlineFileDone,
  AiOutlineFund,
  AiOutlineFileExcel,
  AiOutlineFileExclamation,
} from "react-icons/ai";

const CardContratos = () => {
  let history = useHistory();
  return (
    <Container>
      <Row lg={12}>
        <Col xl={3} sm={3} md={3} xs={12} className="mb-2">
          <Card className="text-center bg-light">
            <Card.Body>
              <Card.Title>
                <AiOutlineFileDone color="#4eaf36" size={30} />
                234
              </Card.Title>
              <Card.Text className="small">
                Cantidad de contratos vigentes
              </Card.Text>
              <Button
                variant="outline-primary"
                onClick={() => history.push("/contratos")}
              >
                Ver Contratos
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={3} md={3} xs={12} className="mb-2">
          <Card className="text-center bg-light">
            <Card.Body>
              <Card.Title>
                <AiOutlineFund color="#737b71" size={30} />
                164
              </Card.Title>
              <Card.Text className="small">Cantidad de contratistas</Card.Text>
              <Button variant="outline-primary">Ver Lista</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={3} md={3} xs={12} className="mb-2">
          <Card className="text-center bg-light">
            <Card.Body>
              <Card.Title>
                <AiOutlineFileExcel color="#cc6f6f" size={30} />
                31
              </Card.Title>
              <Card.Text className="small">
                Contratos con semáforo rojos
              </Card.Text>
              <Button variant="outline-primary">Ver Contratos</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} sm={3} md={3} xs={12} className="mb-2">
          <Card className="text-center bg-light">
            <Card.Body>
              <Card.Title>
                <AiOutlineFileExclamation color="#c3a71e" size={30} />
                24
              </Card.Title>
              <Card.Text className="small">
                Vencen en menos de 3 meses
              </Card.Text>
              <Button variant="outline-primary">Ver Contratos</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CardContratos;
