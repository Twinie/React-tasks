import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Element Below" : "Show Element Below"}
      </button>

      <div>{show ? "Toggle Challenge" : ""}</div>
    </>
  );
}

export default App;
