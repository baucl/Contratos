import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ModalKPIFinanciero = ({ hanldeShowModal, showModal, modalInfo }) => {
  const [meses, setMeses] = useState(0);
  const [nodes, setNodes] = useState(root);
  const [modalExpand, setModalExpand] = useState("50vw");
  const [modalTitle, setModalTitle] = useState(null);

  useEffect(() => {
    switch (modalInfo.id) {
      case "2":
        setModalExpand("90vw");
        setModalTitle("HES Aprobadas");
        break;
      default:
        setModalExpand("50vw");
        setModalTitle(null);
        break;
    }
  }, [modalInfo.id]);

  let modalOptions = {
    title: null,
    nameOk: null,
    nameCanel: null,
    showOk: false,
    showCancel: false,
  };

  const renderFooter = () => {
    return (
      <div>
        {modalOptions.showCancel && (
          <Button
            label={modalOptions.nameCanel}
            icon="pi pi-times"
            onClick={hanldeShowModal}
            className="p-button-text"
          />
        )}
        {modalOptions.showOk && (
          <Button
            label={modalOptions.nameOk}
            icon="pi pi-check"
            onClick={hanldeShowModal}
            autoFocus
          />
        )}
      </div>
    );
  };

  const HESApproved = () => {
    modalOptions = {
      title: "HES Aprobadas",
      nameOk: null,
      nameCanel: "Cerrar",
      showCancel: true,
      showOk: false,
    };

    const Actions = () => {
      return (
        <React.Fragment>
          <Button
            icon="pi pi-eye"
            className="p-button-rounded p-button-secondary p-button-outlined p-mr-2"
            tooltip="Ver resumen"
            tooltipOptions={{ position: "top" }}
            onClick={() => null /*history.push("/contratos-resumen")*/}
          />
          <Button
            icon="pi pi-reply"
            className="p-button-rounded p-button-info p-button-outlined p-mr-2"
            tooltip="Reenviar"
            tooltipOptions={{ position: "top" }}
            onClick={() => null}
          />
        </React.Fragment>
      );
    };

    return (
      <>
        <div className="datatable-responsive-demo">
          <div className="card">
            <DataTable
              selection={null}
              onSelectionChange={(e) => null}
              onCellSelect={(e) => console.log(e)}
              dataKey="id"
              value={nodes}
              className="p-datatable-responsive-demo"
            >
              <Column field="data.name" header="N° HES" />
              <Column field="data.size" header="Fecha de envio" />
              <Column field="data.type" header="Fecha de aprobacion" />
              <Column field="data.type" header="Monto" />
              <Column field="data.type" header="Observaciones" />
              <Column field="data.type" header="Acciones" body={Actions} />
            </DataTable>
          </div>
        </div>
      </>
    );
  };

  const showModalType = () => {
    switch (modalInfo?.id) {
      case "0":
        return null;
      case "1":
        return null;
      case "2":
        return HESApproved();
    }
  };

  return (
    <>
      <Dialog
        header={modalTitle}
        visible={showModal}
        onHide={hanldeShowModal}
        breakpoints={{ "960px": "75vw" }}
        style={{ width: modalExpand }}
        footer={renderFooter}
      >
        {showModalType()}
      </Dialog>
    </>
  );
};
export default ModalKPIFinanciero;


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
  ];
  