//importamos sequelize para poder crear la conexion con la base de datos
import { Sequelize } from "sequelize";
//importamos la configuracion de la base de datos
const db = new Sequelize("database_app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
export default db;
