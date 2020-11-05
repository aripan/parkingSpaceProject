import express from "express";
const router = express.Router();

import {
  getParkingLotList,
  getParkingLotById,
} from "../controllers/parkingLotController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getParkingLotList);
router.route("/:id").get(protect, getParkingLotById);

export default router;
