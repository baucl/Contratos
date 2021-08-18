import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import Container from "react-bootstrap/Container";

const ContratosResumen = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    setNodes(root);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const actionTemplate = (node, column) => {
    console.log(node);
    if (node?.icon && node?.tooltip) {
      return (
        <div>
          <Button
            icon={`${node.icon || null}`}
            className="p-button-rounded p-button-secondary p-button-outlined p-mr-2"
            tooltip={`${node.tooltip}`}
            tooltipOptions={{ position: "top" }}
            onClick={() => null}
          />
        </div>
      );
    }
  };

  const header = "File Viewer";
  const footer = (
    <div style={{ textAlign: "left" }}>
      <Button icon="pi pi-refresh" tooltip="Reload" />
    </div>
  );
  return (
    <Container>
      <div className="datatable-responsive-demo">
        <div className="card">
          <DataTable
            value={nodes}
            className="p-datatable-responsive-demo"
            header={header}
            footer={footer}
          >
            <Column field="data.name" />
            <Column field="data.size" />
            <Column field="data.type" />
            <Column
              body={actionTemplate}
              style={{ textAlign: "center", width: "8em" }}
            />
          </DataTable>
        </div>
      </div>
    </Container>
  );
};

export default ContratosResumen;

export const root = [
  {
    id: "0",
    icon: "pi pi-eye",
    tooltip: "Ver Contrato",
    data: {
      name: "Fecha de inicio",
      size: "100kb",
      type: "Folder",
    },
  },
  {
    id: "1",
    icon: "pi pi-bell",
    tooltip: "Configuracion de notificaci\u00F3n",
    data: {
      name: "Fecha de vencimiento",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "2",
    icon: "pi pi-image",
    tooltip: "Ver Imagen",
    data: {
      name: "Garant\u00EDa",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "3",
    icon: "pi pi-bell",
    tooltip: "Configuracion de notificaci\u00F3n de vencimiento",
    data: {
      name: "Vencimiento garant\u00EDa",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "4",
    icon: "pi pi-id-card",
    tooltip: "Datos del contacto",
    data: {
      name: "Administrador contrato proveedor",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "5",
    icon: "pi pi-id-card",
    tooltip: "Datos del contacto",
    data: {
      name: "Administrador contrato interno",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "6",
    icon: "pi pi-shopping-cart",
    tooltip: "Ver pedido",
    data: {
      name: "Monto aprobado",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "7",
    icon: "pi pi-check-circle",
    tooltip: "Ver HES aprobadas",
    data: {
      name: "Monto gastado",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    key: "8",
    icon: null,
    data: {
      name: "Mondeda",
      moneda: "USD",
    },
  },
  {
    key: "9",
    icon: "pi pi-eye",
    tooltip: "Ver detalle",
    data: {
      name: "Modificaciones",
      cantidad: 6,
    },
  },
];
