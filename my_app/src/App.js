import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";
import Navigation from "./components/Navigation";
import "./css/styles.css";

function App() {
  return (
    <>
    <BrowserRouter>
      {/* Navigation */}
      <Navigation />

      {/* Page Content */}
      <Content />
  </BrowserRouter>
      
    </>
  );
}

export default App;
