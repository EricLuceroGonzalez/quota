import React, { useState, useEffect } from "react";
import "./Define.css";
import grammaticalCategories from "./categories.json";

const DefineComponent = React.forwardRef((props, ref) => {
  const [word, setWord] = useState("");
  const [grammatical, setGrammatical] = useState("");
  const [definition, setDefinition] = useState("");

  useEffect(() => {
    console.log(grammaticalCategories.grammaticalCategories);
    const setRandomCategory = () => {
      console.log("here");
      setGrammatical(
        grammaticalCategories.grammaticalCategories[
          Math.floor(
            Math.random() * grammaticalCategories.grammaticalCategories.length
          )
        ]
      );
      console.log(
        Math.floor(
          Math.random() * grammaticalCategories.grammaticalCategories.length
        )
      );
    };
    if (grammaticalCategories) {
      setRandomCategory();
      console.log(grammatical);
    }
    return () => {
      // cleanup;
    };
  }, [grammaticalCategories, grammatical]);
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
      <div className="col-10 col-md-6 mb-3 searchBar mr-auto ml-auto">
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
      <div className="col-10 col-md-6 mt-3 searchBar mr-auto ml-auto">
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
      {word && (
        <div ref={ref} className="define-all col-10 col-sm-6">
          <div className="def-word">{word}</div>
          {<div className='def-cat'>      {grammatical.abbreviation}</div>}
          <div className="mt-4 def-inside">{definition} </div>
        </div>
        // TODO: Highlight on category to read the meaning.
      )}
    </React.Fragment>
  );
});

export default DefineComponent;
