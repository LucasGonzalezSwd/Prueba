const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// Ruta para crear un nuevo usuario
router.post("/", (req, res) => {
  const { nombre, email, edad } = req.body;

  const nuevoUsuario = new Usuario({ nombre, email, edad });
  nuevoUsuario
    .save()
    .then((usuario) => res.status(201).json(usuario))
    .catch((err) =>
      res.status(400).json({ message: "Error al guardar usuario", err })
    );
});

// Ruta para obtener todos los usuarios
router.get("/", (req, res) => {
  Usuario.find()
    .then((usuarios) => res.json(usuarios))
    .catch((err) =>
      res.status(400).json({ message: "Error al obtener los usuarios", err })
    );
});

// Ruta para obtener un usuario por su ID
router.get("/:id", (req, res) => {
  Usuario.findById(req.params.id)
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(usuario);
    })
    .catch((err) =>
      res.status(400).json({ message: "Error al buscar el usuario", err })
    );
});

// Ruta para actualizar un usuario por su ID
router.put("/:id", (req, res) => {
  const { nombre, email, edad } = req.body;

  Usuario.findByIdAndUpdate(
    req.params.id,
    { nombre, email, edad },
    { new: true }
  )
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json(usuario);
    })
    .catch((err) =>
      res.status(400).json({ message: "Error al actualizar el usuario", err })
    );
});

// Ruta para eliminar un usuario por su ID
router.delete("/:id", (req, res) => {
  Usuario.findByIdAndDelete(req.params.id)
    .then((usuario) => {
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json({ message: "Usuario eliminado correctamente" });
    })
    .catch((err) =>
      res.status(400).json({ message: "Error al eliminar el usuario", err })
    );
});

module.exports = router;
