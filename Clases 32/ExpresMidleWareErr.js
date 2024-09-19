const express = require("express");
const app = express();

// Rutas de ejemplo
app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

app.post("/productos", (req, res) => {
  res.send("Producto creado");
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

// Middleware para manejar errores internos del servidor (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
