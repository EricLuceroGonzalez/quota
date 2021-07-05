import React, { useState } from "react";
import DefineComponent from "./Define";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

import "./Landing.css";
import QuotaComponent from "./Quota";
const Landing = () => {
  // let compRef = useRef();

  return (
    <div className="w-full mt-6">
      <div className="w-full flex flex-col justify-center">
        <h1 className="font-raleway text-indigo-600 text-6xl">
          Quo<span className="text-indigo-500">ta</span>
        </h1>
        <p className="text-xs md:text-sm text-indigo-400 font-raleway w-12/12 text-center">
          An app to make definitions{" "}
          <span className="text-yellow-500">quote-like</span>, with custom
          arbitrary definitions, and colors.
        </p>
      </div>
      <div>
        <QuotaComponent />
        {/* <button
          className="w-full bg-indigo-800 shadow-lg"
          onClick={() => exportComponentAsPNG(compRef)}
        >
          Descargar (png)
        </button> */}
      </div>
    </div>
  );
};

export default Landing;
