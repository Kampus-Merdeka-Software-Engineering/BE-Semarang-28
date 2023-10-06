import express from "express";
import {
  signUpUser,
  findAllUser,
  findUserByUsername,
  loginUser
} from "../controllers/UserController.js";

const router = express.Router();

router.post("/users", signUpUser);
router.get("/users", findAllUser);
router.get("/users/:username", findUserByUsername);
router.get("/login", loginUser);

export default router;
