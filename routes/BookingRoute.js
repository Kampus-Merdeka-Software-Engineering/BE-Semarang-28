import express from "express";
import { createBooking, getBookingsfromUser } from "../controllers/BookingController.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookingsfromUser);

export default router;
