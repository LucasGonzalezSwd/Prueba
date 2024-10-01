import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/actions";
import "../App.css"

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "electrodomésticos", // Valor predeterminado
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(formData));
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
    <h2 className="text">Creacion de Producto</h2>
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
      <select  className="input" name="category" value={formData.category} onChange={handleChange}>
        <option value="electrodomésticos">Electrodomésticos</option>
        <option value="ropa">Ropa</option>
        <option value="comidas">Comidas</option>
        <option value="herramientas">Herramientas</option>
      </select>

      <button className="input-2" type="submit">Crear</button>
    </form></div>
  );
};

export default ProductForm;
