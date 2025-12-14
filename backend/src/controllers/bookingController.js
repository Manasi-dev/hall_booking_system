const Booking = require("../models/Booking"); // 🔴 THIS LINE IS REQUIRED

exports.createBooking = async (req, res) => {
  const {
    mobileNo,
    hallName,
    applicantName,
    email,
    purposeOfUse,
    rent,
    receiptNo,
    receiptDate
  } = req.body;

  // Required field validation
  if (
    !mobileNo ||
    !hallName ||
    !applicantName ||
    !email ||
    !purposeOfUse ||
    !rent ||
    !receiptNo ||
    !receiptDate
  ) {
    return res.status(400).json({ message: "All required fields must be filled" });
  }

  // Mobile validation
  if (!/^[0-9]{10}$/.test(mobileNo)) {
    return res.status(400).json({ message: "Invalid mobile number" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    const booking = await Booking.create(req.body);
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};


exports.getBookings = async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
};

exports.updateBooking = async (req, res) => {
  await Booking.update(req.body, {
    where: { id: req.params.id }
  });
  res.send("Booking updated");
};

exports.deleteBooking = async (req, res) => {
  await Booking.destroy({
    where: { id: req.params.id }
  });
  res.send("Booking deleted");
};
