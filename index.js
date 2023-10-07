import dotenv from "dotenv";
import express from "express";
import BookingRoute from "./routes/BookingRoute.js";
import cors from "cors";


dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/bookings", BookingRoute);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
