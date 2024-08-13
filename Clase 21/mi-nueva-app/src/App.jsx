import React from "react";
import { Routes, Route } from "react-router-dom";
// import ListaDeTareas from "./components/ListaDeTareas";
// import Temporizador from "./components/Temporizador";
// import { Redireccion } from "./components/Redireccion";
import "./App.css";
import { Tienda } from "./components/Tienda";
import { NavBar } from "./components/NavBar";
import { Verduras } from "./components/Verduras";
import {Carnes} from  "./components/Carnes"
import {Herramientas} from "./components/Herramientas"


function App() {
  return (
    <div className="App">
       <NavBar/>

      <Routes>
      
      <Route path="/" exact element={<Tienda />}/> 
      <Route path="/verduras" element={<Verduras />}/> 
      <Route path="/carnes" element={<Carnes />}/> 
      <Route path="/Herramientas" element={<Herramientas />}/> 
         
     
        {/* <Route path="/" element={<Home nombre="Pedrito" />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/listaTareas" element={<ListaDeTareas />} /> */}
      
      </Routes>
    </div>
  );
}

// function Home({ nombre }) {
//   return (
//     <div>
//       <h1>Hola, {nombre}!</h1>
//       <Redireccion />
//     </div>
//   );
// }

export default App;
