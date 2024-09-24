require("dotenv").config(); // Para usar variables de entorno
const express = require("express");
const mongoose = require("mongoose");
const productosRoutes = require("./routes/productRoutes");
const app = express();

// Middleware para parsear el cuerpo de la petición como JSON
// Middleware para parsear el cuerpo de la petición como JSON
app.use(express.json()); // Para solicitudes JSON
app.use(express.urlencoded({ extended: true })); // Para solicitudes URL-encoded

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error al conectar a MongoDB", err));

// Usar el router de usuarios
app.use("/api", productosRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
