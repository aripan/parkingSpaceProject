import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// const cities = require("./data/cities");
import parkingLotRoutes from "./routes/ParkingLotRouter.js";
import userRoute from "./routes/userRouter.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// app.get("/api/cities", (req, res) => {
//   res.json(cities);
// });

// app.get("/api/cities/:id", (req, res) => {
//   const city = cities.find((c) => c._id === req.params.id);
//   res.json(city);
// });

// app.get("/api/cities/:id/hourlyOccupancy", (req, res) => {
//   const city = cities.find((c) => c._id === req.params.id);
//   res.json(city.hourlyOccupancy);
// });

app.use("/api/cities", parkingLotRoutes);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
