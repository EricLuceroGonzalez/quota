import React, { useState, useRef } from "react";
import "./Define.css";
import { exportComponentAsPNG } from "react-component-export-image";

const QuotaComponent = (props) => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let ref = useRef();

  const handleQuote = (e) => {
    const value = e.target.value;
    setQuote(value);
  };
  
  const handleAuthor = (e) => {
    const value = e.target.value;
    setAuthor(value);
  };
  return (
    <React.Fragment>
      <div className="w-full flex flex-col py-12">
        <div className="py-4">
          <textarea
            type="text"
            rows="6"
            className="py-6 px-4 border-transparent shadow-lg font-martel text-secondary w-10/12 md:w-8/12 text-base md:text-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={quote}
            onChange={(param) => handleQuote(param)}
            placeholder="Escribe tu frase o texto para citar..."
          ></textarea>
        </div>
        <div className="pt-4">
          <input
            type="text"
            className="py-4 px-4 border-transparent shadow-lg font-raleway text-secondary w-10/12 md:w-8/12 text-base md:text-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
            value={author}
            onChange={(param) => handleAuthor(param)}
            placeholder="Autor"
          ></input>
        </div>
        <div className="py-4 flex justify-center">
          {quote && (
              <div
                ref={ref}
                className="bg-white text-black px-8 py-12 w-10/12 md:w-8/12"
              >
                <div className="font-martel text-left flex flex-row">
                  <div className="text-5xl text-secondary font-playfair">
                    “
                  </div>
                  <div className="text-lg md:text-3xl">
                    {quote}
                    <span className="text-4xl text-secondary font-playfair ml-2">
                      ”
                    </span>
                  </div>
                </div>
                {author && (
                  <div className="text-2xl md:text-4xl py-4 pr-12 text-right w-12/12 font-raleway text-secondary">
                    {author}{" "}
                  </div>
                )}
              </div>
          )}
        </div>
        <div className="w-full mt-4">
                <button
                  className="w-8/12 md:w-4/12 text-headline bg-highlight shadow-lg font-raleway py-2 rounded-2xl text-sm"
                  onClick={() => exportComponentAsPNG(ref)}
                >
                  Descargar <span className='text-sm'>(png)</span>
                </button>
              </div>
      </div>
    </React.Fragment>
  );
};

export default QuotaComponent;

// Probablemente de todos nuestros sentimientos el único que no es verdaderamente nuestro es la esperanza. La esperanza le pertenece a la vida, es la vida misma defendiéndose.
// Julio Cortázar
