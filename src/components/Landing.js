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
        <h1 className="font-raleway text-headline text-6xl">
          Quo<span className="text-headline">ta</span>
        </h1>
        <div className="w-12/12 flex justify-center">
          <p className="text-xs md:text-sm text-highlight font-raleway w-8/12">
            An app to make{" "}
            <span className="text-secondary">quote-like</span>, with custom
            & arbitrary definitions, and colors.
          </p>
        </div>
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
