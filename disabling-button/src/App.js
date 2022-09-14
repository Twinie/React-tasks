import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [val, setVal] = useState("");

  return (
    <>
      <h3>Disable Button Challenge</h3>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.currentTarget.value)}
      />
      <button disabled={!val}>Submit</button>
    </>
  );
}

export default App;
