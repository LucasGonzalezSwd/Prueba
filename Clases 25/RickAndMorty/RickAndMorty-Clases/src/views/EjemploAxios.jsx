import { useEffect, useState } from 'react';
import axios from 'axios';

function EjemploAxios() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState('asc'); // Estado para controlar el orden

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        let sortedData = response.data;

        // Ordena los datos según el valor de 'order'
        if (order === 'asc') {
          sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
        } else {
          sortedData = sortedData.sort((a, b) => b.title.localeCompare(a.title));
        }

        setData(sortedData);
      } catch (error) {
        setError('Error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [order]); // El efecto se ejecuta cada vez que cambia 'order'

  const handleOrder = (newOrder) => {
    setOrder(newOrder); // Actualiza el estado de 'order'
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div>
        <button onClick={() => handleOrder('asc')}>Ordenar A-Z</button>
        <button onClick={() => handleOrder('desc')}>Ordenar Z-A</button>
      </div>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EjemploAxios;
