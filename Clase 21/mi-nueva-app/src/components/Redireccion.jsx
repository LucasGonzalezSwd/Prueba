import React from "react";
import { Link } from "react-router-dom";
export const Redireccion = () => {
    
  return (
    <div>
      <Link to="/temporizador">
        <button>Ir a Temporizador</button>
      </Link>
      <Link to="/listaTareas">
        <button>Ir a lista de tareas</button>
      </Link>
      <Link to="/">
        <button>Ir a Home</button>
      </Link>
    </div>
  );
};
