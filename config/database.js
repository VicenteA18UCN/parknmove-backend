/**
 * Este archivo se encarga de configurar la conexión a la base de datos.
 */

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    seederStorage: "json",
    seederStoragePath: "sequelizeData.json",
    seederStorageTableName: "sequelize_data",
  },
  test: {
    username: "root",
    password: null,
    database: "parkingdb",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
