import React from "react";
import { Card, Col, Row, Space } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const ValorContratos = () => {
  return (
    <Row gutter={24}>
      <Col xs={24} md={12}>
        <Card
          className="border text-center"
          bodyStyle={{ backgroundColor: "#1e4e7d" }}
          hoverable
          headStyle={{ backgroundColor: "#1e4e7d", lineHeight: 1 }}
          title={
            <Row gutter={8} className="text-white">
              <Col style={{ bottom: 5 }}>
                <DollarCircleOutlined
                  style={{ fontSize: "25px", color: "#1a7d33" }}
                />
              </Col>
              <Col className="h6">Total de los contratos</Col>
            </Row>
          }
        >
          <div className="text-white h2" style={{ lineHeight: 0 }}>
            $189,654,789.00 USD
          </div>
        </Card>
      </Col>

      <Col xs={24} md={12}>
        <Card
          className="border text-center"
          bodyStyle={{ backgroundColor: "#1e4e7d" }}
          headStyle={{ backgroundColor: "#1e4e7d", lineHeight: 1 }}
          title={
            <Row gutter={8} className="text-white">
              <Col style={{ bottom: 3 }}>
                <DollarCircleOutlined
                  style={{ fontSize: "25px", color: "#1a7d33" }}
                />
              </Col>
              <Col className="h6">Anulizado de los contratos</Col>
            </Row>
          }
          hoverable
        >
          <div className="text-white h2" style={{ lineHeight: 0 }}>
            $63,218,263.00 USD
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ValorContratos;
