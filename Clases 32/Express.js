// Creación de rutas en Express.js
// Qué son las rutas: En Express.js, las rutas se utilizan para definir los puntos de acceso que permiten a los usuarios interactuar con el servidor. Las rutas especifican una URL y un método HTTP.

// Ejemplo:

app.get("/ruta", (req, res) => {
  res.send("Respuesta de la ruta GET /ruta");
});

// Métodos HTTP soportados:
// GET: Para obtener información.
// POST: Para enviar información.
// PUT: Para actualizar datos.
// DELETE: Para eliminar datos.
// Parámetros de ruta: Se pueden pasar parámetros dinámicos en las rutas.

// Ejemplo:

app.get("/users/:id", (req, res) => {
  res.send(`Usuario con ID: ${req.params.id}`);
});

// 2. Middlewares en Express.js
// Qué son los middlewares: Funciones que tienen acceso al objeto de solicitud (req), respuesta (res) y al siguiente middleware en la cadena. Se utilizan para realizar tareas comunes como autenticación, manejo de sesiones, logging, etc.

// Tipos de middlewares:

// Middlewares globales: Aplicados a todas las rutas.
// Ejemplo:

app.use((req, res, next) => {
  console.log("Request recibido:", req.method, req.url);
  next(); // Llama al siguiente middleware
});

// Middlewares específicos de rutas: Aplicados solo a ciertas rutas.
// Ejemplo:

app.get("/ruta", middleware, (req, res) => {
  res.send("Ruta con middleware");
});

// 3. Manejo de errores en Express.js
// Qué es el manejo de errores: Express.js maneja errores usando middlewares que capturan errores y los envían al cliente con un mensaje adecuado.

// Uso de next() para propagar errores:

// Ejemplo de middleware de error:

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("¡Algo salió mal!");
});
// 4. Flujo de la petición en Express.js

// Una petición sigue el siguiente flujo:
// Se recibe la solicitud.
// Los middlewares globales se ejecutan.
// Se ejecutan middlewares de rutas.
// Se envía una respuesta o se pasa el control a un middleware de manejo de errores.
