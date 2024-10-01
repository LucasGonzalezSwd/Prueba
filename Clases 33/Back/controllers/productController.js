const Product = require("../models/Productos");

const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock, category, image } = req.body;

    // Validar que los campos requeridos no falten
    if (!name || !price || !description || !stock || !category || !image) {
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    // Validar que la categoría sea válida antes de intentar guardar en la base de datos
    const validCategories = [
      "electrodomésticos",
      "ropa",
      "comidas",
      "herramientas",
    ];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: "Categoría no válida" });
    }

    // Crear y guardar el producto
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  console.log("ID recibido:", req.params.id);
  try {
    // 1. Buscar el producto
    const productToDelete = await Product.findByIdAndDelete(req.params.id);

    // 2. Verificar si el producto existe
    if (!productToDelete) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    // 4. Responder al cliente con un mensaje
    res.status(200).json({ message: "Producto eliminado" }); // Cambiado a 200
  } catch (error) {
    console.log("Error al eliminar:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener productos filtrados por categoría
const getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params; // Obtener la categoría de los parámetros de la URL
    // Validar que la categoría es válida
    const validCategories = [
      "electrodomésticos",
      "ropa",
      "comidas",
      "herramientas",
    ];
    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: "Categoría no válida" });
    }

    // Obtener los productos de la categoría especificada
    const products = await Product.find({ category });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
