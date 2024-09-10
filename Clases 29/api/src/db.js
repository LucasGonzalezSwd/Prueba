require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const { MYSQLPASSWORD, MYSQLUSER, MYSQLHOST, MYSQLPORT, MYSQLDATABASE } =
  process.env;

const usuarioModel = require("./models/Modelo1");

const sequelize = new Sequelize(MYSQLDATABASE, MYSQLUSER, MYSQLPASSWORD, {
  host: MYSQLHOST,
  port: MYSQLPORT,
  dialect: "mysql",
  logging: false, // set to console.log to see the raw SQL queries
});

// const sequelize = new Sequelize('pelunachin','root', null ,{
//   host: '127.0.0.1',
//   port: '3307',
//   dialect: 'mysql',
//   logging: false // set to console.log to see the raw SQL queries
// });

usuarioModel(sequelize);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { modelo1 } = sequelize.models;

// Product.hasMany(Reviews);
module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  // para importart la conexión { conn } = require('./db.js');
};
