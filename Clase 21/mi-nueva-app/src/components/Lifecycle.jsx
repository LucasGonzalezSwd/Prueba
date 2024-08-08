import React, { useState, useEffect } from 'react';


function MiComponenteFuncional() {

  const [contador, setContador] = useState(0);

  useEffect(() => {

    console.log('Component Did Mount/Update');
    
    return () => {
      console.log('Component Will Unmount');
    };
  }, [contador]); // Dependencia

  return <h1>{contador}</h1>;
}

export default MiComponenteFuncional;



