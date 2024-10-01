import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail, updateProduct } from "../redux/actions";
import { useParams, useNavigate } from "react-router-dom";

const ProductUpdate = () => {
  const { id } = useParams(); // Obtener el ID del producto desde los parámetros de la URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const productDetail = useSelector((state) => state.productDetail); // Obtener los detalles del producto desde el estado de Redux

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "electrodomésticos", // Valor predeterminado
  });

  useEffect(() => {
    dispatch(getProductDetail(id)); // Obtener los detalles del producto al cargar el componente
    
  }, [dispatch, id]);

  useEffect(() => {
    // Actualizar los datos del formulario cuando los detalles del producto estén disponibles
    if (productDetail) {
      setFormData({
        name: productDetail.name || "",
        price: productDetail.price || "",
        description: productDetail.description || "",
        stock: productDetail.stock || "",
        image: productDetail.image || "",
        category: productDetail.category || "electrodomésticos", // Asegurar valor predeterminado si no hay categoría
      });
    }
  }, [productDetail]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, formData)); // Despachar la acción de actualización del producto

    navigate("/"); // Redirigir a la página de inicio o lista de productos
  };

  // Mostrar un mensaje de carga mientras se obtienen los detalles del producto
  if (!productDetail) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
      <h2 className="text">Actualizar Producto</h2>
      <input 
        className="input"
        
        type="text"
        name="name"
        placeholder="Nombre del producto"
        value={formData.name}
        onChange={handleChange}
      />
      <input 
        className="input"
        type="number"
        name="price"
        placeholder="Precio"
        value={formData.price}
        onChange={handleChange}
      />
      <input 
        className="input"
        type="text"
        name="description"
        placeholder="Descripción"
        value={formData.description}
        onChange={handleChange}
      />
      <input 
        className="input"
        type="text"
        name="image"
        placeholder="Imagen"
        value={formData.image}
        onChange={handleChange}
      />
      <input 
        className="input"
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
      />

      {/* Selector de categoría */}
      <select className="input" name="category" value={formData.category} onChange={handleChange}>
        <option value="electrodomésticos">Electrodomésticos</option>
        <option value="ropa">Ropa</option>
        <option value="comidas">Comidas</option>
        <option value="herramientas">Herramientas</option>
      </select>

      <button className="input-2" type="submit">Actualizar Producto</button>
    </form></div>
  );
};

export default ProductUpdate;
