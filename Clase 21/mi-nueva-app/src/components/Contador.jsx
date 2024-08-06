import React, { useState } from 'react';

function Contador() {
  
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador - 1)}>Haz clic</button>
    </div>
  );
}

export default Contador;
