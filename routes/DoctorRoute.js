import express from "express";
import {AddDoctor, findAllDoctors,
} from "../controllers/DoctorController.js";

const router = express.Router();

// router.get("/doctors/:name", )

router.get("/api/doctors", findAllDoctors);
router.post("/doctors", AddDoctor);

export default router;