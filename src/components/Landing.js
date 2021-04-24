import React, { useState, useRef } from "react";
import DefineComponent from "./Define";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

import "./Landing.css";
const Landing = () => {
  let compRef = useRef();

  return (
    <div style={{ padding: "1rem auto" }}>
      <h1 className="logo">
        Defi<span>no</span>{" "}
      </h1>
      <p className="landing-message col-10 col-md-5 ml-auto mr-auto">
        An app to make definitions{" "}
        <span style={{ color: "var(--color-primary" }}>dictionary-like</span>,
        with custom arbitrary definitions, and colors.
      </p>
      <div className="landing-define-box">
        <DefineComponent ref={compRef} />
        <button
          className="
        define-btn col-10 col-md-8 col-lg-4 mr-auto ml-auto"
          onClick={() => exportComponentAsPNG(compRef)}
        >
          Descargar (png)
        </button>
      </div>
    </div>
  );
};

export default Landing;
