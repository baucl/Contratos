import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

export const NewContractModalForm = ({ show, handleClose }) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        scrollable={true}
        size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Creación de contratos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h4 style={{ textAlign: "right", fontWeight: "400" }}>
              Código Interno: <b>MNCC3456789</b>
            </h4>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridProviderName">
                <Form.Label>Nombre proveedor</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridProviderTaxId">
                <Form.Label>TAX ID Proveedor</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridContractName">
                <Form.Label>Nombre contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridContractId">
                <Form.Label>Número de contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="formGridContractDescription">
              <Form.Label>Descripción de contrato</Form.Label>
              <Form.Control as="textarea" placeholder="" />
            </Form.Group>

            <h4>Clasificación del contrato</h4>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridContractCategory">
                <Form.Label>Categoría del Contrato</Form.Label>
                <Form.Select defaultValue="Contrato Marco">
                  <option>Contrato Marco</option>
                  <option>Convenio precio</option>
                  <option>Contrato transversal</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridContractId2">
                <Form.Label>Número de contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridContractVP">
                <Form.Label>VP a la que pertenece el contrato</Form.Label>
                <Form.Select defaultValue="VP Operaciones">
                  <option>VP Operaciones</option>
                  <option>VP Comercial</option>
                  <option>VP TICA</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGerency">
                <Form.Label>Gerencia</Form.Label>
                <Form.Select defaultValue="Gerencia General">
                  <option>Gerencia General</option>
                  <option>Gerencia Mantenimiento</option>
                  <option>Gerencia Operaciones</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridFaena">
                <Form.Label>Faena</Form.Label>
                <Form.Select defaultValue="Mina Cerro Blanco">
                  <option>Mina Cerro Blanco</option>
                  <option>Planta Cerro Blanco</option>
                  <option>Casa Matriz</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridAdministrator">
                <Form.Label>Administrador</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridApprovers">
                <Form.Label>Aprobadores</Form.Label>
                <Form.Select defaultValue="Juan Riquelme">
                  <option>Juan Riquelme</option>
                  <option>Pedro Cerón</option>
                  <option>Alberto Gomez</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCriticality">
                <Form.Label>Criticidad</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <h4>Plazos, Montos y garantías</h4>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Fecha inicio contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEndDate">
                <Form.Label>Fecha término contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAmountApproved">
                <Form.Label>Monto aprobado del contrato</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridMonthlySpending">
                <Form.Label>Plan de gasto mensual</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridWarranty">
                <Form.Label>Tiene garantía</Form.Label>
                <Form.Select defaultValue="Si">
                  <option>Si</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWarrantyAmount">
                <Form.Label>Monto Garantía</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridWarrantyValidity">
                <Form.Label>Vigencia garantía</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridWarrantyBacking">
                <Form.Label>Respaldo garantía</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            <h4>Evaluaciones</h4>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTestPeriod">
                <Form.Label>Período de evaluación</Form.Label>
                <Form.Select defaultValue="Mensual">
                  <option>Mensual</option>
                  <option>Trimestral</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEvaluationCriteria">
                <Form.Label>Criterios de evaluación</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Crear
          </Button>
          <Button variant="secundary" onClick={handleClose}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
