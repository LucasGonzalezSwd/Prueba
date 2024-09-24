const Product = require("../models/Productos");

const createProduct = async (req, res) => {
  try {
    // Validar que los campos nombre y price no falten
    const { name, price, description, stock, category } = req.body;
    if (!name || !price || !description || !stock || !category) {
      return res
        .status(400)
        .json({ message: "Faltan campos requeridos: nombre y price." });
    }

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

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
};
