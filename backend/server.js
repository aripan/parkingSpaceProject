const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cities = require("./data/cities");

dotenv.config();

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/cities", (req, res) => {
  res.json(cities);
});

app.get("/api/cities/:id", (req, res) => {
  const city = cities.find((c) => c._id === req.params.id);
  res.json(city);
});

app.get("/api/cities/:id/hourlyOccupancy", (req, res) => {
  const city = cities.find((c) => c._id === req.params.id);
  res.json(city.hourlyOccupancy);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
