require("dotenv").config(); // Para usar variables de entorno
const express = require("express");
const mongoose = require("mongoose");
const usuariosRouter = require("./routes/usuarios");

const app = express();

// Middleware para parsear el cuerpo de la petición como JSON
app.use(express.json());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error al conectar a MongoDB", err));

// Usar el router de usuarios
app.use("/usuarios", usuariosRouter);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
