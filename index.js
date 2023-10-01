import dotenv from "dotenv";
import express from "express";
import DoctorRoute from "./routes/DoctorRoute.js";
import UserRoute from "./routes/UserRoute.js";
import BookingRoute from "./routes/BookingRoute.js";
import cors from "cors";
import loggerMiddleware from "./middleware/logger.js";
import session from "express-session";

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();


app.use(express.json());
app.use(cors({
  credentials: true,
  origin: []
}));

session({
  secret: process.env.SESS_SECRET,
  saveUninitialized: true,
  resave: false,
  cookie: {
      secure: 'auto'
  }
});

app.use(loggerMiddleware); 


app.use(UserRoute);
app.use(BookingRoute);
app.use(DoctorRoute);

app.listen(process.env.PORT||3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
