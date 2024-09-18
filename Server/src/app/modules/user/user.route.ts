import express from "express";
import { UserController } from "./user.controller";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.get(
  "/",
  auth('admin'),
  UserController.getAllUser
);
router.get(
  "/me",
  auth('user','admin'),
  UserController.getUserByEmail
);




export const UserRoute = router;

