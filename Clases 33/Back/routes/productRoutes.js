const express = require("express");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
} = require("../controllers/productController");

const router = express.Router();

router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

router.get("/products", getProducts);
router.get("/products/:category", getProductsByCategory);
module.exports = router;
