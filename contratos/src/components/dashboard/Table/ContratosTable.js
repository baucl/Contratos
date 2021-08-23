import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";

const DataTableResponsiveDemo = () => {
  const [products, setProducts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    setProducts(data);
  }, []);

  const codeBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Code</span>
        {rowData.code}
      </React.Fragment>
    );
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Name</span>
        {rowData.name}
      </React.Fragment>
    );
  };

  const categoryBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Category</span>
        {rowData.category}
      </React.Fragment>
    );
  };

  const quantityBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <span className="p-column-title">Quantity</span>
        {rowData.quantity}
      </React.Fragment>
    );
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-instock`}
        style={{
          backgroundColor: "#c8e6c9",
          color: "#256029",
          borderRadius: 2,
          padding: ".25em .5rem",
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: 12,
          letterSpacing: 0.3,
        }}
      >
        Aprobado
      </span>
    );
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-eye"
          className="p-button-rounded p-button-secondary p-button-outlined p-mr-2"
          tooltip="Ver resumen"
          tooltipOptions={{ position: "top" }}
          onClick={() => history.push("/contratos-resumen")}
        />
        <Button
          icon="pi pi-chart-line"
          className="p-button-rounded p-button-info p-button-outlined p-mr-2"
          tooltip="KPI Financiero"
          tooltipOptions={{ position: "top" }}
          onClick={() => history.push("/kpi-financieros")}
        />
        <Button
          icon="pi pi-check"
          className="p-button-rounded p-button-success p-button-outlined"
          tooltip="Evaluaciones"
          tooltipOptions={{ position: "top" }}
          onClick={() => null}
        />
      </React.Fragment>
    );
  };

  return (
    <div className="px-5">
      <div className="datatable-responsive-demo">
        <div className="card">
          <DataTable
            value={products}
            className="p-datatable-responsive-demo"
            paginator
            rows={10}
            header="Resultado de búsqueda:"
          >
            <Column
              field="nombre"
              header="Nombre Contrato"
              body={codeBodyTemplate}
            />
            <Column
              field="Contratista"
              header="Contratista"
              body={nameBodyTemplate}
            />
            <Column
              field="vigencia"
              header="Vigencia"
              body={categoryBodyTemplate}
            />
            <Column field="monto" header="Monto" body={quantityBodyTemplate} />
            <Column field="estado" header="Estado" body={statusBodyTemplate} />
            <Column body={actionBodyTemplate} />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default DataTableResponsiveDemo;

export const data = [
  {
    id: "1000",
    code: "f230fh0g3",
    name: "Bamboo Watch",
    description: "Product Description",
    image: "bamboo-watch.jpg",
    price: 65,
    category: "Accessories",
    quantity: 24,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1001",
    code: "nvklal433",
    name: "Black Watch",
    description: "Product Description",
    image: "black-watch.jpg",
    price: 72,
    category: "Accessories",
    quantity: 61,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    name: "Blue Band",
    description: "Product Description",
    image: "blue-band.jpg",
    price: 79,
    category: "Fitness",
    quantity: 2,
    inventoryStatus: "LOWSTOCK",
    rating: 3,
  },
  {
    id: "1003",
    code: "244wgerg2",
    name: "Blue T-Shirt",
    description: "Product Description",
    image: "blue-t-shirt.jpg",
    price: 29,
    category: "Clothing",
    quantity: 25,
    inventoryStatus: "INSTOCK",
    rating: 5,
  },
  {
    id: "1004",
    code: "h456wer53",
    name: "Bracelet",
    description: "Product Description",
    image: "bracelet.jpg",
    price: 15,
    category: "Accessories",
    quantity: 73,
    inventoryStatus: "INSTOCK",
    rating: 4,
  },
  {
    id: "1005",
    code: "av2231fwg",
    name: "Brown Purse",
    description: "Product Description",
    image: "brown-purse.jpg",
    price: 120,
    category: "Accessories",
    quantity: 0,
    inventoryStatus: "OUTOFSTOCK",
    rating: 4,
  },
];
