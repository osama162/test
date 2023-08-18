import About from "./content/About";
import Experience from "./content/Experience";
import Education from "./content/Education";
import Skills from "./content/Skills";
import Interest from "./content/Interest";
import { Route, Routes } from "react-router-dom";
import Page404 from "./content/Page404";
import Awards from "./content/Awards";

function Content() {
  return (
    <div className="container-fluid p-0">

      <Routes>
        {/* About */}
        <Route exact path="/" element={<About/>} />
        <Route exact path="/about" element={<About/>} />
        {/* <hr className="m-0" /> */}
         {/* Experience */}
        <Route path="/experience" element={<Experience/>} />
        {/* <hr className="m-0" /> */}
        {/* Education */}
        <Route path="/education" element={<Education/>} />
        {/* <hr className="m-0" /> */}
        {/* Skills */}
        <Route path="/skills" element={<Skills/>} />
        {/* <hr className="m-0" /> */}
        {/* Interset */}
        <Route path="/interest" element={<Interest/>} />
        {/* <hr className="m-0" /> */}
        {/* Award */}
        <Route path="/awards" element={<Awards/>}/>
        {/* <hr className="m-0" /> */}
        <Route exact  path="/*" element={<Page404/>} />
      </Routes>
      
      
     
    </div>
  );
}

export default Content;
