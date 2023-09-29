import { DataTypes } from "sequelize";
import db from "../config/Database.js";


const User = db.define("User", {
  User_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    len : [3,100]
  },
  phone_number: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    isEmail: true
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;

// kalau belum ada table patient, di buat pakai ini

(async () => {
  await db.sync();
})();
