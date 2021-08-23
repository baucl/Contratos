import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ModalTable = ({
  showConfiguration,
  hanldeShowConfiguration,
  modalInfo,
}) => {
  const [meses, setMeses] = useState(0);
  const [nodes, setNodes] = useState(root);
  const [modalExpand, setModalExpand] = useState("50vw");
  let modalOptions = {
    nameOk: null,
    nameCanel: null,
    showOk: false,
    showCancel: false,
  };

  useEffect(() => {
    modalInfo.id === "7" ? setModalExpand("90vw") : setModalExpand("50vw");
  }, [modalInfo.id]);

  const changeMonths = (value) => {
    setMeses(value);
  };

  const renderFooter = () => {
    return (
      <div>
        {modalOptions.showCancel && (
          <Button
            label={modalOptions.nameCanel}
            icon="pi pi-times"
            onClick={hanldeShowConfiguration}
            className="p-button-text"
          />
        )}
        {modalOptions.showOk && (
          <Button
            label={modalOptions.nameOk}
            icon="pi pi-check"
            onClick={hanldeShowConfiguration}
            autoFocus
          />
        )}
      </div>
    );
  };

  const Notification = () => {
    modalOptions = {
      nameOk: "Aceptar",
      nameCanel: "Cerrar",
      showCancel: true,
      showOk: true,
    };
    return (
      <div className="d-flex justify-content-center">
        <div className="p-grid">
          <div className="p-col-12">
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-clock"></i>
              </span>
              <InputNumber
                min={0}
                max={24}
                inputId="horizontal"
                value={meses}
                onValueChange={({ value }) => changeMonths(value)}
                showButtons
                buttonLayout="horizontal"
                decrementButtonClassName="bg-secondary"
                incrementButtonClassName="bg-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                mode="decimal"
                useGrouping={false}
              />
            </div>
            <div className="small col-12 text-center text-muted">
              <em>Notificar {meses} meses antes del vencimiento</em>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ShowImage = () => {
    let dataImg =
      "iVBORw0KGgoAAAANSUhEUgAAAHcAAAAbCAYAAABGDxCrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUJDMzJDNjU0MjZEMTFFOEJDQjVEQURFQzk3NDQxODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUJDMzJDNjY0MjZEMTFFOEJDQjVEQURFQzk3NDQxODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQkMzMkM2MzQyNkQxMUU4QkNCNURBREVDOTc0NDE4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQkMzMkM2NDQyNkQxMUU4QkNCNURBREVDOTc0NDE4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqbyoroAAAT/SURBVHja7Fp7qBVFGJ+9t65Xu5nXkowoFUUjSQKLQIqCisKyqJBCSQP/UBNRA4MKioLK7P0gJSJB6UWlJGoFpRSJldA/0dukh721x8007znnbr+v8zswfc7Ozu7pnNXYD34cdnZmd+Z7zW++s1Ecx6aU/6ccwd/5wHnAX0ANiKw+HUA3sA54To0/C1gCDABVx7hOYDWwqVR1ccZ9PKDvyQ7jXgBcHfCO0rgFSEeGvvscbZWAcZVSzcUaN8QAB3I6R61U86Efub607pOoVHOxxg2hzHFO5/AZdwRwSsK9I4HRJGXG02eU6nM0MCFlTkM4zpZjHW0jgeMDdSlje1TbqSkBILoZQ8LakEF8lk9vMq9zEvoM4XszRW6cM3J977gUeNSzgBXAUM/4E0gGbaWKs3wCzPGMm+R472wHsVwKLArUjzxvimp7G3jWM0YMuQoYr4jrY7znksnAG3R8l03GASuzRm4r0vJAyn4f4nw6siVydwLXA2MzjIsc74sybCudqu8gGuFM4IoM8/Ct+3TgZeBOYI1Hp/3/ReR2Nmncmse4MUlcnDIn3Wc4sBm4FXjEM65ftVUdpLGSge0fUORRHP9XYC5wE3Bcgm76aRC9Ji1nA+uBmcAzKTqptMu47ZYaU9NG4E/gloLmIfo6CXiNKXtlRue326cDT7Cm8GYr2PLhYlx7u1hIxUxoIt02I1XygjX8nR04j4hjRaYBNwDXAdtadRTKS6hqBUWvyI/Aw8BTBcwhos4G81qMsziAfTcMK6n1EqZiIZbv5T0KdbQwcosuYggb3UXF2utu1/m7sZ9+DjwPPOmI3FjpWZzyZmAecC3nflre9FXjmbEVRZBqk2fwgRTFuVKbdkRhzu8Ar/KY1NEmw8ZqLss4h1mm/oeKy8HEsJfxdyrwM4+Fm3hMirMq8MsMHmjUmSyEReaR/oC9sdOm/h7ZA9wFPGjNqajK2RIy+V5gr8PRhgHfARfSsCL3ARuALXmiI+Rfmz3qeiirJGmyL6cSdjOzjPb0GcOssz/AEVfRqHOYIltNBiNH5Ip8zCLFPQnbllSYvgB+U+3zuX/fkdW4KwL6vquuZzrKbS75ugmmudvBMG25Bvg2wzMXcMxFjI68RNI0OfYhOq1Uvz5TjlajEbsd48631hBs3B3c7JNE/sR/wbqWA/nywAWuT/FuX3pcRlIx3XFP2OflTFlGVYaSnE4c4QFT/19aFxW6Wd2y5agMEd6jeEvEtqT9fR65gOyrv6utpidBL5LGLzb1MumUUELV2AumOhZoWOnps67XBkbtOqaYJJEUNMJz/0Ma9nb+fsrFjyPJuNKRGaRw8b3nma+YeglvpGrvI4mx5SOm8WEOI/VyH3ya1z+o7UGi9idPhUtKpPcD9yrdVrjXJhHJ7aZe876bR6W96n4Xz9QmUt9QXQW86CA20vkXXstiZgR681guIkmkyD8+JbobUTWDZ0RJ19+Yg78KsSN3sGPP0jLcWpPhmC5HFE0EjnEoW+b0FbOeYZ/9FrmLyEv+SGH8vexTVZHbl7IljKITaE4jGelc4CUjxlW4Mf63TLPurY3DZZbj2SXaiKQby2mgpbyeCGzPYNi5pXKLR+T5tPUM4H2eyW4LTMMfkLJvNaUULlHKd8uT/8ndB3+hoOUtniNXp+wvpRxCxu3iBi20W75RPtE6GlTIVKWs93oTxYpSCjJuKYex/C3AALm9+aQG5KZMAAAAAElFTkSuQmCC";

    modalOptions = {
      nameOk: null,
      nameCanel: "Cerrar",
      showCancel: true,
      showOk: false,
    };
    return (
      <div className="card">
        <img
          className="bg-dark"
          src={`data:image/png;base64,${dataImg}`}
          alt={null}
          style={{ width: "100%", display: "block" }}
        />
      </div>
    );
  };

  const HESApproved = () => {
    modalOptions = {
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
      case "1":
        return Notification();
      case "2":
        return ShowImage();
      case "3":
        return Notification();
      case "4":
        return null;
      case "5":
        return null;
      case "6":
        return ShowImage();
      case "7":
        return HESApproved();
      case "8":
        return null;
    }
  };
  return (
    <Dialog
      header={modalInfo?.title}
      visible={showConfiguration}
      onHide={hanldeShowConfiguration}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: modalExpand }}
      footer={renderFooter}
    >
      {showModalType()}
    </Dialog>
  );  
};

export default ModalTable;

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
