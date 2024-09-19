// // controllers/index.js
// const Usuario = require("../Models/Usuario");

// const obtenerUsuario = async (req, res) => {
//   try {
//     const usuarios = await Usuario.findAll();
//     res.json(usuarios);
//   } catch (err) {
//     res.status(500).json({ error: "Error al obtener los usuarios" });
//   }
// };

// module.exports = { obtenerUsuario }; // Correcto: exportar como objeto
