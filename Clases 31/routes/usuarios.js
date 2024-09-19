// routes/usuarios.js
const express = require("express");
const Usuario = require("../Models/Usuario");

const router = express.Router();

// GET: Obtener todos los usuarios
router.get("/obtener", async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
});

// POST: Crear un nuevo usuario
router.post("/crear", async (req, res) => {
  try {
    const { nombre, email, contraseña, dobleFactor } = req.body;
    if ((nombre && email && contraseña) || dobleFactor) {
      const nuevoUsuario = await Usuario.create({
        nombre,
        email,
        contraseña,
      });
      res.status(201).json(nuevoUsuario);
    }
  } catch (err) {
    res.status(400).json({ error: "Error al crear el usuario" });
  }
});

// PUT: Actualizar un usuario por ID
router.put("/editar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, contraseña } = req.body;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      usuario.nombre = nombre;
      usuario.email = email;
      usuario.contraseña = contraseña;
      await usuario.save();
      res.json(usuario);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(400).json({ error: "Error al actualizar el usuario" });
  }
});

// DELETE: Eliminar un usuario por ID
router.delete("/eliminar/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (usuario) {
      await usuario.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
});

module.exports = router;
