import React, { useState } from "react";
import "./Define.css";

const DefineComponent = React.forwardRef((props, ref) => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleWord = (e) => {
    const value = e.target.value;
    setWord(value);
  };

  const handleDefinition = (e) => {
    const value = e.target.value;
    setDefinition(value);
  };
  return (
    <React.Fragment>
      <div className="col-8 mb-3 searchBar mr-auto ml-auto">
        <div className="col-12">
          <input
            type="text"
            className="col-12  searchInput"
            value={word}
            onChange={(param) => handleWord(param)}
            placeholder="Palabra"
          ></input>
        </div>
      </div>
      <div className="col-8 mt-5 searchBar mr-auto ml-auto">
        <div className="col-12">
          <textarea
            type="text"
            rows="6"
            className="col-12  searchInput"
            value={definition}
            onChange={(param) => handleDefinition(param)}
            placeholder="Define"
          ></textarea>
        </div>
      </div>

      {word ||
        (definition && (
          <div ref={ref} className="define-all col-10 col-sm-6">
            <div className="col-12 def-word">{word}</div>
            <div className="def-inside">{definition} </div>
          </div>
        ))}
    </React.Fragment>
  );
});

export default DefineComponent;
