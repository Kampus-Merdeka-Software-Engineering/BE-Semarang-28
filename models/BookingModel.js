import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const Booking = db.define("booking", {
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Appointment_Doctor: {
    type: DataTypes.STRING,
  },
  clinic: {
    type: DataTypes.STRING,
  },
  appointment_time: {
    type: DataTypes.DATE,
  },
  userUUID: {
    type: DataTypes.INTEGER,
  },
});

export default Booking;

// kalau table booking nggaada dibuat pakai ini

(async () => {
  await db.sync();
})();
