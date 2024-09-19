// config/database.js
require("dotenv").config(); // Cargar las variables de entorno
const { Sequelize } = require("sequelize");

// Configuración de Sequelize
const sequelize = new Sequelize("users", "root", null, {
  host: "localhost", // El host donde corre tu base de datos
  port: 3307, // El puerto de MySQL, asegúrate que 3307 es el correcto
  dialect: "mysql", // Dialecto que estás utilizando, en este caso MySQL
});

// Exportar la instancia de Sequelize
module.exports = sequelize;
