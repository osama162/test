import { useContext } from "react";
import { inputContext } from "./App";

function Comp3() {
  const test = useContext(inputContext);
  return (
    <>
      <h1>This is component 3</h1>
      <textarea
        type="text"
        value={test.value1}
        onChange={(e) => test.value2(e.target.value)}
      />
      <p>this is input value : {test.value1}</p>
    </>
  );
}
export default Comp3;
