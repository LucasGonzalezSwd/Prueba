import React, { useState, useEffect } from 'react';

function ContadorConEfecto() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has hecho clic ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>Haz clic</button>
    </div>
  );
}

export default ContadorConEfecto;
