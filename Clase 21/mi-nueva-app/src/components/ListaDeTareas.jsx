import React, { useState } from 'react';
import { Redireccion } from './Redireccion';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea('');
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
       <Redireccion/>
       
    </div>
  );
}

export default ListaDeTareas;
