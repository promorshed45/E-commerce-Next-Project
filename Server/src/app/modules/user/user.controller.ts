import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catechAsync";
import { UserService } from "./user.service";

// get all orders and email search functionality 
const getAllUser = catchAsync(async (req, res) => {

    const result = await UserService.getAllUser();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User fatched successfully!`,
        data: result,
    })
})

// Retrieve a Specific User by ID
const getUserByEmail = catchAsync(async (req, res) => {

    const { email } = req.user;

    const result = UserService.getUserByToken(email);

    // send respone
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User retrieve successfully!",
        data: result,
    })
})

export const UserController = {
    getAllUser,
    getUserByEmail
}