import path from "path";
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

app.use("/api/cities", parkingLotRoutes);
app.use("/api/users", userRoute);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  // FOR ROUTES WHICH ARE NOT DEFINED
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  // Home route
  app.get("/", (req, res) => {
    res.send("Its working");
  });
}

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
