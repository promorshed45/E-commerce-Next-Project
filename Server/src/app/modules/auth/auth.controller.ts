import httpStatus from "http-status";
import config from "../../config";
import catchAsync from "../../utils/catechAsync";
import { AuthServices } from "./auth.service";
import sendResponse from "../../utils/sendResponse";

const createUser = catchAsync(async (req, res) => {
  
  // const result = await AuthServices.createUserIntoDB(req.file, req.body);
  const result = await AuthServices.createUserIntoDB(req.body);

  // console.log(req.file,req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  })
});

const loginUser = catchAsync(async (req, res) => {
  const { user, accessToken, refreshToken } = await AuthServices.loginUser(req.body);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: true,
    maxAge: 1000 * 60 * 60 * 24 *365,
  });


  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
    accessToken: accessToken,
    refreshToken: refreshToken,
    data: user
  });
});


const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token is retrieved succesfully!',
    data: result,
  });
});


// Soft Delete a Product
const softDeleteUserById = catchAsync(async (req, res) => {

  const { userId } = req.params;
  const result = await AuthServices.softDeleteUser(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully!",
    data: result,
  })
});

const forgetPassqword = catchAsync(async (req, res) => {

  const email = req.body.email;
  const result = AuthServices.forgetPassword(email as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reset link is generated successfully",
    data: result,
  })
});


const resetPassword = catchAsync(async (req, res) => {

  const token = req.headers.authorization;
  const result = AuthServices.resetPassword(req.body, token as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password reset successfully",
    data: result,
  })
});




export const authControllers = {
  createUser,
  loginUser,
  refreshToken,
  softDeleteUserById,
  forgetPassqword,
  resetPassword
};