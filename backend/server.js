const express = require("express");

const cities = require("./data/cities");
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

app.listen(5000, console.log("Server running on port 5000"));
