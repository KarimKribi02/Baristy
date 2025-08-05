import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Concept from "../pages/Concept";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/concept" element={<Concept />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/galerie" element={<Gallery />} />
    </Routes>
  );
};

export default AppRoutes;
