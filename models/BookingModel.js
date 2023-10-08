import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const Booking = db.define("booking", {
  bookingID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  patientname: {
    type: DataTypes.STRING,
  },
  doctor: {
    type: DataTypes.STRING,
  },
  clinic: {
    type: DataTypes.STRING,
  },
  appointment_time: {
    type: DataTypes.DATE,
  },
});

export default Booking;

// kalau table booking nggaada dibuat pakai ini

(async () => {
  await db.sync();
})();
