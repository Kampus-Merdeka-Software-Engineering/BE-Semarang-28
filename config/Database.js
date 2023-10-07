import "dotenv/config";
import { Sequelize } from "sequelize";

const db = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
      {
    host : 'localhost',
    dialect: "mysql",
});

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => {
    console.log(`Unable to connect to database: ${error}`);
  });

export default db;
