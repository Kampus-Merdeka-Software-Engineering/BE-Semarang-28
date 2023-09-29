import express from "express";
import {
  signUpUser,
  findAllUser,
  loginUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findAllUser);
router.get("/user", loginUser);

export default router;
