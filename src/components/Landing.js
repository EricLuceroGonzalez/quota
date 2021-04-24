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
    <div style={{padding: '2rem auto'}}>
      <h1 className='logo'>MeDefine</h1>
      <p className="landing-message">
        An app to make definitions dictionary-like, with custom arbitrary
        definitions, and colors.
      </p>
      <div className="landing-define-box">
        <DefineComponent ref={compRef} />
      </div>
      <button onClick={() => exportComponentAsPNG(compRef)}>
        Export As PNG
      </button>
    </div>
  );
};

export default Landing;
