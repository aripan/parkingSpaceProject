import asyncHandler from "express-async-handler";
import cities from "../data/cities.js";

// @desc        Fetch the list of parking lots
// @route       GET/api/cities
// @access      private
const getParkingLotList = asyncHandler(async (req, res) => {
  res.json(cities);
});

// @desc        Fetch specific parking lot
// @route       GET/api/cities/:id
// @access      private
const getParkingLotById = asyncHandler(async (req, res) => {
  const city = await cities.find((c) => c._id === req.params.id);
  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ message: "Please specify the choice" });
  }
});

export { getParkingLotList, getParkingLotById };
