import React from "react";

import { Link } from "react-router-dom";

const Contratos = () => {
  return (
    <div>
      <Link
        style={{
          textDecoration: "none",
          fontSize: "0.8rem",
          marginLeft: "15px",
        }}
        to="/">
        Dashboard
      </Link>
      <div
        style={{
          marginLeft: "8px",
          marginTop: "15px",
          marginBottom: "0",
          fontSize: "0.8rem",
          display: "inline-block",
        }}>
        / Resultado de búsqueda: Compañía
      </div>
    </div>
  );
};

export default Contratos;
