import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ModalTable from "./Modal/ModalTable";

const ContratosResumen = () => {
  let history = useHistory();
  const [nodes, setNodes] = useState(root);
  const [showConfiguration, setShowConfiguration] = useState(false);
  const [select, setSelect] = useState(null);
  const [modalInfo, setModalInfo] = useState({
    id: null,
    iconType: null,
    title: null,
    body: null,
  });

  const actionTemplate = (data) => {
    if (data?.icon && data?.tooltip) {
      return (
        <div>
          <Button
            icon={`${data.icon || null}`}
            className="p-button-rounded p-button-secondary p-button-outlined p-mr-2"
            tooltip={`${data.tooltip}`}
            tooltipOptions={{ position: "top" }}
            onClick={() => onClickModal(data)}
          />
        </div>
      );
    }
  };

  const onClickModal = (data) => {
    setModalInfo({
      id: data?.id,
      iconType: data?.icon,
      title: data?.tooltip,
      body: data?.tooltip,
    });
    data?.id !== "0" && setShowConfiguration(true);
  };

  const hanldeShowConfiguration = () => {
    setShowConfiguration(false);
  };

  const back = (
    <div style={{ textAlign: "left" }}>
      <Button
        icon="pi pi-arrow-left"
        tooltip="Volver"
        className="p-button-sm"
        onClick={() => history.push("/contratos")}
      />
    </div>
  );
  return (
    <div className="px-5">
      <div className="datatable-responsive-demo">
        <div className="card">
          <DataTable
            selection={select}
            onSelectionChange={(e) => setSelect(e.value)}
            onCellSelect={(e) => console.log(e)}
            dataKey="id"
            value={nodes}
            header={back}
            className="p-datatable-responsive-demo"
          >
            <Column
              field="data.name"
              headerStyle={{
                display: "none",
              }}
            />
            <Column
              field="data.size"
              headerStyle={{
                display: "none",
              }}
               className="text-center"
            />
            <Column
              field="data.type"
              headerStyle={{
                display: "none",
              }}
              className="text-center"
            />
            <Column
              body={actionTemplate}
              headerStyle={{
                display: "none",
              }}
              className="text-center"
            />
          </DataTable>
        </div>
      </div>
      <ModalTable
        modalInfo={modalInfo}
        showConfiguration={showConfiguration}
        hanldeShowConfiguration={hanldeShowConfiguration}
      />
    </div>
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
    id: "2",
    icon: "pi pi-image",
    tooltip: "Ver Imagen",
    data: {
      name: "Garant\u00EDa",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "3",
    icon: "pi pi-bell",
    tooltip: "Configuracion de notificaci\u00F3n de vencimiento",
    data: {
      name: "Vencimiento garant\u00EDa",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "4",
    icon: "pi pi-id-card",
    tooltip: "Datos del contacto",
    data: {
      name: "Administrador contrato proveedor",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "5",
    icon: "pi pi-id-card",
    tooltip: "Datos del contacto",
    data: {
      name: "Administrador contrato interno",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "6",
    icon: "pi pi-shopping-cart",
    tooltip: "Ver pedido",
    data: {
      name: "Monto aprobado",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "7",
    icon: "pi pi-check-circle",
    tooltip: "Ver HES aprobadas",
    data: {
      name: "Monto gastado",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "8",
    icon: null,
    data: {
      name: "Mondeda",
      moneda: "USD",
    },
  },
  {
    id: "9",
    icon: "pi pi-eye",
    tooltip: "Ver detalle",
    data: {
      name: "Modificaciones",
      cantidad: 6,
    },
  },
];
