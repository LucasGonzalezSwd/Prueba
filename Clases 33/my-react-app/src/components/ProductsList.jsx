import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../redux/actions";
import "../App.css"
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container">
      <h2>Lista de Productos</h2>
      <ul className="ul-list">
        {products.map((product) => (
          <li key={product._id} className="list">
            <img src={product.image} alt="" className="imagen" />
            <br />
            Nombre - {product.name}  <br />
                Precio - ${product.price}  <br />
                Categoria - {product.category}  <br />
               <button><Link className="button-no-link" to={`/editar/${product._id}`}>Editar</Link></button> 
            <button onClick={() => handleDelete(product._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
