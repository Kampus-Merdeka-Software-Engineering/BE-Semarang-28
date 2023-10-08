
import { Sequelize } from "sequelize";

const db = new Sequelize(
  "railway", 
  "root",
  "tJG30E1A9NN1V9joYaOI",
      {
    host : "containers-us-west-160.railway.app",
    port:"7621",
    dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default db;
