const mongoose = require("mongoose");

// Lista de categorías permitidas
const validCategories = [
  "electrodomésticos",
  "ropa",
  "comidas",
  "herramientas",
];

const Productos = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: validCategories, // Valida que la categoría esté en la lista
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", Productos);

module.exports = Product;
