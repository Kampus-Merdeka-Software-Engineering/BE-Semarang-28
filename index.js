import express from "express";
import BookingRoute from "./routes/BookingRoute.js";
import cors from "cors";


const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/bookings", BookingRoute);



app.listen(PORT, "0.0.0.0", function() {} );
