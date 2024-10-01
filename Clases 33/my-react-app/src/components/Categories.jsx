import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByCategory } from '../redux/actions';
import "../App.css"
function Categories() {
  const [category, setCategory] = useState(''); // Estado local para la categoría seleccionada
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.products || []); // Asegurar que siempre sea un array
  console.log(products);
  
  // Cuando la categoría cambia, se ejecuta la acción
  useEffect(() => {
    if (category) {
      dispatch(getProductsByCategory(category));
    }
  }, [category, dispatch]);

  return (
    <div>
      <h1>Filtrar por Categoría</h1>
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="">Seleccionar una categoría</option>
        <option value="electrodomésticos">Electrodomésticos</option>
        <option value="ropa">Ropa</option>
        <option value="comidas">Comidas</option>
        <option value="herramientas">Herramientas</option>
      </select>
      
      <div className="container">
        <h2>Productos en la categoría {category}</h2>
        {products.length > 0 ? (
          <ul className="ul-list">
            {products.map((product) => (
              <li key={product._id} className='list'>
                <img src={product.image} alt="" className="imagen" />
                <br />
                Nombre - {product.name}  <br />
                Precio - ${product.price}  <br /> 
                Categoria - {product.category}  <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay productos disponibles para esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
