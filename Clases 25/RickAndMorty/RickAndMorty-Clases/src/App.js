import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Home } from "./views/Home";
// import { Detail } from "./views/Detail";
// import EjemploAxios from "./views/EjemploAxios";
import "../src/styles/Home.css";
// import Weather from "./Clase 26/Weather";
// import Chat from "./Clase 26/Chat";
// import JsonPlaceholder from "./Clase 26/JsonPlaceholder";
import Crud from "./Clase 27/Crud";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Crud />} />
        {/* <Route path="/" element={<Weather />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/post" element={<JsonPlaceholder />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
      </Routes>
    </div>
  );
}

export default App;
