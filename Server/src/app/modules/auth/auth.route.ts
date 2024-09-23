import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { createUserValidation } from "../user/user.validation";
import { authValidaions } from "./auth.validation";
// import { upload } from "../../utils/imageUpload";
// import parseData from "../../middleware/parseData";

const router = express.Router();

router.post(
  "/register",
  // upload.single('profileImage'),
  // parseData,
  validateRequest(createUserValidation),
  authControllers.createUser
);

router.post(
  "/login",
  authControllers.loginUser
);

router.post(
  "/refresh-token",
  authControllers.refreshToken
);

router.post(
  "/forget-password",
  validateRequest(authValidaions.forgetPassqwordValidation),
  authControllers.forgetPassqword
);
router.post(
  "/reset-password",
  validateRequest(authValidaions.resetPassqwordValidation),
  authControllers.resetPassword
);


export const AuthRoute = router;

