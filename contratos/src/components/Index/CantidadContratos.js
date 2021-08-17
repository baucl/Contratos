import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Button } from "antd";
import {
  FileDoneOutlined,
  FileExcelOutlined,
  RiseOutlined,
  FileExclamationOutlined,
} from "@ant-design/icons";

const CantidadContratos = () => {
  return (
    <Row gutter={24}>
      <Col xs={24} md={6} className="p-3">
        <Card
          className="border"
          bodyStyle={{ paddingBlock: 18, backgroundColor: "#f9fafe" }}
          headStyle={{ backgroundColor: "#1e4e7d" }}
          title={
            <Row gutter={24} className="text-white text-center">
              <Col style={{ bottom: 3 }}>
                <FileDoneOutlined style={{ fontSize: "25px" }} />
              </Col>
              <Col>Vigentes</Col>
            </Row>
          }
          hoverable
        >
          <div
            className="text-center pb-2 h1"
          >
            234
          </div>
          <Button type="dashed" className="col-12">
            <Link style={{ textDecoration: "none" }} to="/contratos">
              Ver Contratos
            </Link>
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={6} className="p-3">
        <Card
          className="border"
          bodyStyle={{ paddingBlock: 18, backgroundColor: "#f9fafe" }}
          headStyle={{ backgroundColor: "#1e4e7d" }}
          title={
            <Row gutter={24} className="text-white text-center">
              <Col style={{ bottom: 3 }}>
                <FileExcelOutlined style={{ fontSize: "25px" }} />
              </Col>
              <Col className="h6">Con sem&aacute;foro rojo</Col>
            </Row>
          }
          hoverable
        >
          <div
            className="text-center pb-2 h1"
          >
            31
          </div>
          <Button type="dashed" className="col-12">
            Ver Contratos
          </Button>
        </Card>
      </Col>

      <Col xs={24} md={6} className="p-3">
        <Card
          className="border"
          headStyle={{ backgroundColor: "#1e4e7d" }}
          bodyStyle={{ paddingBlock: 18, backgroundColor: "#f9fafe" }}
          title={
            <Row gutter={24} className="text-white text-center">
              <Col style={{ bottom: 3 }}>
                <FileExclamationOutlined style={{ fontSize: "25px" }} />
              </Col>
              <Col className="h6">Vencen en menos de 3 meses</Col>
            </Row>
          }
          hoverable
        >
          <div
            className="text-center pb-2 h1"
          >
            24
          </div>
          <Button type="dashed" className="col-12">
            Ver Contratos
          </Button>
        </Card>
      </Col>
      <Col xs={24} md={6} className="p-3">
        <Card
          className="border"
          headStyle={{ backgroundColor: "#1e4e7d" }}
          bodyStyle={{ paddingBlock: 18, backgroundColor: "#f9fafe" }}
          title={
            <Row gutter={24} className="text-white text-center">
              <Col style={{ bottom: 3 }}>
                <RiseOutlined style={{ fontSize: "25px" }} />
              </Col>
              <Col className="h6">Cantidad de Contratistas</Col>
            </Row>
          }
          hoverable
        >
          <div
            className="text-center pb-2 h1"
          >
            164
          </div>
          <Button type="dashed" className="col-12">
            Ver lista de contratistas
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default CantidadContratos;
