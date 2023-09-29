import Booking from "../models/BookingModel.js";

export const createBooking = async (req, res) => {
  try {
    await Booking.create(req.body);
    res.status(201).json({ msg: "Booking created" });
  } catch (error) {
    res.send(error.message);
  }
};

export const getAllBookingsfromUser = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { User_id: req.params.User_id },
    });

    res.status(200).json(bookings);
  } catch (error) {
    res.send(error.message);
  }
};
