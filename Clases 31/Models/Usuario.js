// models/Usuario.js
const { DataTypes } = require("sequelize");
const sequelize = require("../Config/database"); // Importar la configuración de Sequelize

// Definir el modelo Usuario
const Usuario = sequelize.define("Usuario", {
  nombre: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // El email debe ser único
    validate: {
      isEmail: true, // Validar que sea un formato de email
    },
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Usuario;
