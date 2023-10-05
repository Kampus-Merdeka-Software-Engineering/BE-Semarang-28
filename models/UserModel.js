import { DataTypes } from "sequelize";
import db from "../config/Database.js";


const User = db.define("User", {
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
},
  uuid: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate:{
      notEmpty: true
    }
  },
  username: {
    type: DataTypes.STRING,
    len : [3,12]
  },
  name: {
    type: DataTypes.STRING,
    len : [3,100]
  },
  phoneNumber: {
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
