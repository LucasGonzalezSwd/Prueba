
import { Route, Routes } from "react-router-dom";

import ProductUpdate from "./components/ProductUpdate";
import ProductForm from "./components/ProductForm";
import { Home } from "./Views/Home";
import Navbar from "./components/NavBar";
import Categories from "./components/Categories";
import { Landing } from "./Views/Landing";

function App() {
  return (
    <div>
         <Navbar/>
      <Routes>
       <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/crear" element={<ProductForm/>} />
        <Route path="/categorias" element={<Categories/>} />
        <Route path="/editar/:id" element={<ProductUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
