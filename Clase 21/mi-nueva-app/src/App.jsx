import React from "react";
import { Routes, Route } from "react-router-dom";
import ListaDeTareas from "./components/ListaDeTareas";
import Temporizador from "./components/Temporizador";
import "./App.css";
import { Redireccion } from "./components/Redireccion";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home nombre="Pedro" />} />
        <Route path="/temporizador" element={<Temporizador />} />
        <Route path="/listaTareas" element={<ListaDeTareas />} />
      </Routes>
    </div>
  );
}

function Home({ nombre }) {
  return (
    <div>
      <h1>Hola, {nombre}!</h1>
      <Redireccion />
    </div>
  );
}

export default App;
