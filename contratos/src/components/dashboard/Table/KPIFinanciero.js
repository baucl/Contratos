import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import ModalTable from "./Modal/ModalTable";
import ModalKPIFinanciero from "./Modal/ModalKPIFinanciero";

const KPIFinanciero = () => {
  let history = useHistory();
  const [nodes, setNodes] = useState(root);
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(true);
  };

  const hanldeShowModal = () => {
    setShowModal(false);
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
              field="data.amount"
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
      <ModalKPIFinanciero
        modalInfo={modalInfo}
        showModal={showModal}
        hanldeShowModal={hanldeShowModal}
      />
    </div>
  );
};

export default KPIFinanciero;

export const root = [
  {
    id: "0",
    icon: "pi pi-eye",
    tooltip: "Ver Pedido",
    data: {
      name: "Monto aprobado",
      amount: "$ 2,345,650.00",
      size: "100kb",
      type: "Folder",
    },
  },
  {
    id: "1",
    icon: "pi pi-chart-line",
    tooltip: "Ver evolucion del gasto",
    data: {
      name: "Monto gastado según plan",
      amount: "$ 1,130,560.00",
      size: "20kb",
      type: "Folder",
    },
  },
  {
    id: "2",
    icon: "pi pi-eye",
    tooltip: "Ver HES aprobadas",
    data: {
      name: "Monto gastado efectivo",
      amount: "$ 865,430.00",
      size: "20kb",
      type: "Folder",
    },
  },
];
