import { createContext, useState } from "react";
import "./App.css";
import Form from "./Form";
import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
export const inputContext = createContext();
function App() {
  const [input, setInput] = useState("");
  const values = {
    value1: input,
    value2: setInput,
  };
  return (
    <inputContext.Provider value={values}>
      <div className="container">
        <textarea
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <p>{input}</p>
        <Comp1 />
      </div>
    </inputContext.Provider>
  );
}

export default App;
