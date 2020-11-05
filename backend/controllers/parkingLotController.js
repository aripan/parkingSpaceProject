import asyncHandler from "express-async-handler";
import fetch from "node-fetch";
import cities from "../data/cities.js";

// @desc        Fetch the list of parking lots
// @route       GET/api/cities
// @access      private
const getParkingLotList = asyncHandler(async (req, res) => {
  const url_api = "https://jsonplaceholder.typicode.com/users";
  const fetch_res = await fetch(url_api);
  const users = await fetch_res.json();

  res.json(users);

  // res.json(cities);
});

// @desc        Fetch specific parking lot
// @route       GET/api/cities/:id
// @access      private
const getParkingLotById = asyncHandler(async (req, res) => {
  const url_api_id = `https://jsonplaceholder.typicode.com/users/${req.params.id}`;
  const fetch_res_id = await fetch(url_api_id);
  const user = await fetch_res_id.json();

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Please specify the choice" });
  }
});

// // @desc        Fetch specific parking lot
// // @route       GET/api/cities/:id
// // @access      private
// const getParkingLotById = asyncHandler(async (req, res) => {
//   const city = await cities.find((c) => c._id === req.params.id);
//   if (city) {
//     res.json(city);
//   } else {
//     res.status(404).json({ message: "Please specify the choice" });
//   }
// });

export { getParkingLotList, getParkingLotById };
