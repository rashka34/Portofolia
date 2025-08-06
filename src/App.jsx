import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProject from "./pages/MyPoject";
import Header from "./components/Head";




function App(){
  return <div>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
    <Route path="/MyProject" element={<MyProject/>}></Route>
    </Routes>
    
    
  </div>
}

export default App