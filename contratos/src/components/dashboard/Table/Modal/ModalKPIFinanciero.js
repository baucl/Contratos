import React, { useState, useEffect } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Chart } from "primereact/chart";
import { TabView, TabPanel } from "primereact/tabview";

import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const ModalKPIFinanciero = ({ hanldeShowModal, showModal, modalInfo }) => {
  const [meses, setMeses] = useState(0);
  const [nodes, setNodes] = useState(root);
  const [modalExpand, setModalExpand] = useState("50vw");
  const [modalTitle, setModalTitle] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalMaximizable, setModalMaximizable] = useState(false);
  const [changeViewEvolutionOfSpending, setChangeViewEvolutionOfSpending] =
    useState(true);

  useEffect(() => {
    switch (modalInfo?.id) {
      case "1":
        setModalExpand("90vw");
        setModalTitle(TitleDefault);
        setModalMaximizable(true);
        break;
      case "2":
        setModalExpand("90vw");
        setModalTitle("HES Aprobadas");
        break;
      default:
        setModalExpand("50vw");
        setModalTitle(null);
        break;
    }
  }, [modalInfo?.id]);

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

  const TitleDefault = () => (
    <div className="text-center">
      Evolución del gasto contrato
      <div>Servicio de alimentación en FAENA - Antofagasta</div>
    </div>
  );

  const Title = (indexTab) => {
    setActiveIndex(indexTab);
    setModalTitle(
      indexTab === 1 ? (
        <div className="text-center">
          Planilla de datos
          <div>Gasto Contrato C45098765 Servicio Alimentación</div>
        </div>
      ) : (
        <TitleDefault />
      )
    );
  };

  const EvolutionOfSpending = () => {
    return changeViewEvolutionOfSpending ? (
      <TabView
        onTabChange={({ index }) => Title(index)}
        activeIndex={activeIndex}
      >
        <TabPanel header="Graficos">
          <div>
            <Chart type="line" data={gastoMensual} options={basicOptions} />
          </div>
          <div>
            <Chart type="line" data={gastoPlanificado} options={basicOptions} />
          </div>
        </TabPanel>
        <TabPanel header="Datos">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
            velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabView>
    ) : null;
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
        return EvolutionOfSpending();
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

export const gastoMensual = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monto Planificado USD",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#42A5F5",
      tension: 0.4,
    },
    {
      label: "Monto Real USD",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: "#FFA726",
      tension: 0.4,
    },
  ],
};

export const gastoPlanificado = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Acumulado Plan",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#42A5F5",
      tension: 0.4,
    },
    {
      label: "Acumulado real",
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: false,
      borderColor: "#FFA726",
      tension: 0.4,
    },
  ],
};

export const basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: 0.6,
  plugins: {
    legend: {
      labels: {
        color: "#495057",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
    y: {
      ticks: {
        color: "#495057",
      },
      grid: {
        color: "#ebedef",
      },
    },
  },
};

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
