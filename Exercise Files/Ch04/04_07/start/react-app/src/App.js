import "./App.css";
import { useState, useReducer } from "react";

function App() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked}></input>
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;

// the onChange could also be onChange={() => setChecked((checked) => !checked)}
// currently this is a different way so we don't have to have the function in the onChange
