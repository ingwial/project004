import { useState } from "react";
import "./App.css";

function App() {
  function generateRandom() {
    const v = Math.trunc(Math.random() * 10);
    setValue(v);
  }

  const [value, setValue] = useState(0);
  return (
    <div>
      <label>Random number: {value}</label>
      <button onClick={generateRandom}>Generate</button>
    </div>
  );
}

export default App;
