import { OrderService } from "./order.service";
import catchAsync from "../../utils/catechAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";

// create order & update inventory
const createOrder = catchAsync(async (req, res) => {

    console.log(req.user._id);
    const customer = req.user._id;

    console.log('customer id.......', customer);
    if (customer !== req.user._id) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          "User is not found to create order",
        );
      }

    // update inventory
    const order = req.body;
    const result = await OrderService.createdTOrderToDb(order, customer)

    // send respone
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order created successfully!",
        data: result,
    })
})


// get all orders and email search functionality 
const getOrerSearchByEmail = catchAsync(async (req, res) => {
    const email = req.query.email || '';
    const result = await OrderService.getOrerSearchByEmail(email as string);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Orders for email '${email}' fetched successfully!`,
        data: result,
    })
})

const getUserOrders = catchAsync(async (req, res) => {
    const userId = req.user._id;
    const result = await OrderService.getUserOrder(userId);
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User bookings retrieved successfully',
      data: result,
    });
  });


export const OrderController = {
    createOrder,
    getOrerSearchByEmail,
    getUserOrders
}