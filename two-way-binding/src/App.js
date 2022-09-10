import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={val}
        onChange={(e) => setVal(e.currentTarget.value)}
      />
      <p> {val} </p>
    </>
  );
}

export default App;
