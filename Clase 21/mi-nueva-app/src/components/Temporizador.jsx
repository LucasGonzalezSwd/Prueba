import React, { useState, useEffect } from 'react';
import { Redireccion } from './Redireccion';

function Temporizador() {
  const [segundos, setSegundos] = useState(10);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(segundos + 1);
    }, 1000);
    return () => clearInterval(intervalo);
  }, [segundos]);

  return (
    <div>
   
      <p>Segundos: {segundos}</p>
      <Redireccion/>
    </div>
  );
}

export default Temporizador;
