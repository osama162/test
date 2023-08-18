import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
    // console.log("onchange");
  }

  return (
    <div className="App">
      <label>Name: </label>
      <input type="text" onChange={handleChange} />
      <p>{name}</p>
    </div>
  );
}

export default App;
