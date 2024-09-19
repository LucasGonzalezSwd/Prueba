const express = require("express");
const app = express();

const id = Procces.env.Mongodb;
// Middleware global que registra la fecha y hora de cada solicitud
app.use((req, res, next) => {
  console.log(`Petición recibida a las ${new Date()}`);
  next();
});

// Rutas de ejemplo
app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

app.post("/productos", (req, res) => {
  res.send("Producto creado");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
