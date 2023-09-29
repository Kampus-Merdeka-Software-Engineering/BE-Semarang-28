import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Doctor = db.define("Doctor", {
    Doctor_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Doctor_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 100],
        },
    },
    availability_days: {
        type: DataTypes.STRING,
    },
    Availability_hours: {
        type: DataTypes.STRING,
    },
});

export default Doctor;
