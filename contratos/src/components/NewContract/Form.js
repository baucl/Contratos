import React, { useState, useEffect } from "react";

import { Form, Row, Col, Input, Select, Upload, message, Button } from "antd";

const { TextArea } = Input;

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
  },
};

const simpleSpanSize = 8;
const doubleSpanSize = 17;

const gastoMensual = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const respaldoGarantia = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const criterioEvaluacion = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const NewContractForm = () => {
  return (
    <Form {...formItemLayout} layout="vertical">
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Nombre proveedor">
            <Input style={{ border: "1px solid #ccc" }} id="error" />
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="TAX ID Proveedor">
            <Input style={{ border: "1px solid #ccc" }} id="warning" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Nombre contrato">
            <Input style={{ border: "1px solid #ccc" }} id="validating" />
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Número de contrato">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={doubleSpanSize}>
          <Form.Item label="Descripción del contrato">
            <TextArea id="validating" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={doubleSpanSize}>
          <Form.Item>
            <h4>Clasificación del contrato</h4>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Categoria del contrato">
            <Select allowClear>
              <Option value="Contrato Marco">Contrato Marco</Option>
              <Option value="Convenio precio">Convenio precio</Option>
              <Option value="Contrato transversal">Contrato transversal</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Número de contrato">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="VP a la que pertenece el contrato">
            <Select allowClear>
              <Option value="VP Operaciones">VP Operaciones</Option>
              <Option value="VP Comercial">VP Comercial</Option>
              <Option value="VP TICA">VP TICA</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Gerencia">
            <Select allowClear>
              <Option value="VP Operaciones">Gerencia General</Option>
              <Option value="VP Comercial">Gerencia Mantenimiento</Option>
              <Option value="VP TICA">Gerencia Operaciones</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Faena">
            <Select allowClear>
              <Option value="Contrato Marco">Mina Cerro Blanco</Option>
              <Option value="Convenio precio">Planta Cerro Blanco</Option>
              <Option value="Contrato transversal">Casa Matriz</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Administrador">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Aprobadores">
            <Select allowClear>
              <Option value="Contrato Marco">Juan Riquelme</Option>
              <Option value="Convenio precio">Pedro Cerón</Option>
              <Option value="Contrato transversal">Alberto Gomez</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Criticidad">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={doubleSpanSize}>
          <Form.Item>
            <h4>Plazos, Montos y garantías</h4>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Fecha inicio contrato">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Fecha término contrato">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Monto aprobado del contrato">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Plan de gasto mensual">
            <Upload {...gastoMensual}>
              <Button>Seleccionar archivo</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Tiene garantía">
            <Select allowClear>
              <Option value="Contrato Marco">Si</Option>
              <Option value="Convenio precio">No</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Monto Garantía">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Vigencia garantía">
            <Input style={{ border: "1px solid #ccc" }} id="success" />
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Respaldo garantía">
            <Upload {...respaldoGarantia}>
              <Button>Seleccionar archivo</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={doubleSpanSize}>
          <Form.Item label="">
            <h4>Evaluaciones</h4>
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Período de evaluación">
            <Select allowClear>
              <Option value="Contrato Marco">Mensual</Option>
              <Option value="Convenio precio">Trimestral</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col className="column" span={simpleSpanSize}>
          <Form.Item label="Criterios de evaluación">
            <Upload {...criterioEvaluacion}>
              <Button>Seleccionar archivo</Button>
            </Upload>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
