import express from "express";
import {
  signUpUser,
  findAllUser
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findAllUser)

export default router;
