// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Esto es un get con el modulo http!");
//   } else {
//     res.writeHead(405, { "Content-Type": "text/plain" });
//     res.end("Method not allowed");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });

// const express = require("express");
// const app = express();

// // Manejo de la solicitud GET
// app.get("/", (req, res) => {
//   res.status(200).send("Hello, this is a GET request!");
// });

// app.listen(3000, () => {
//   console.log(`Server running at http://localhost:300`);
// });

// // Manejo de otros métodos HTTP (opcional)
// app.post('*', (req, res) => {
//   res.status(405).send('Method not allowed');
// });

// Configuración del puerto

require("dotenv").config(); // Cargar variables de entorno
const express = require("express");
const sequelize = require("./Config/database"); // Importar Sequelize
const usersRouter = require("./routes/usuarios"); // Importar las rutas de usuarios

const app = express();

// Middleware para parsear el cuerpo de la petición como JSON
app.use(express.json());

// Probar la conexión a MySQL
sequelize
  .authenticate()
  .then(() => console.log("Conectado a MySQL"))
  .catch((err) => console.log("Error al conectar a MySQL", err));

// Sincronizar los modelos con la base de datos
sequelize
  .sync({ force: false }) // no borra las tablas existentes
  .then(() => console.log("Tablas sincronizadas"))
  .catch((err) => console.log("Error al sincronizar tablas", err));

// Usar las rutas de usuarios
app.use("/users", usersRouter);

// Configuración del puerto
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
