const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "usuario",
    {
      nombre: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING(300),
      },
      contraseña: {
        type: DataTypes.STRING(16),
      },
    },
    {
      timestamps: false,
    }
  );
};
