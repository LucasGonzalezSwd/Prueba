import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Detail } from "./views/Detail";
// import EjemploAxios from "./views/EjemploAxios";
import "../src/styles/Home.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
