import { Routes, Route } from "react-router-dom";
import ProductManagement from "../screens/ProductManagement";
import Solutions from "../screens/Solutions";
import Docs from "../screens/Docs";
import Media from "../screens/Media";
import Pricing from "../screens/Pricing";
import About from "../screens/About";
import Contact from "../screens/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/product-management" element={<ProductManagement />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/media" element={<Media />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;