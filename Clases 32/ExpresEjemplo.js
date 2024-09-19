const express = require("express");
const app = express();

// Middleware para parsear el cuerpo de la solicitud como JSON
app.use(express.json());

app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

app.post("/productos", (req, res) => {
  res.send("Producto creado");
});

app.delete("/productos/:id", (req, res) => {
  res.send(`Producto con ID ${req.params.id} eliminado`);
});

// Puerto donde el servidor estará escuchando
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
