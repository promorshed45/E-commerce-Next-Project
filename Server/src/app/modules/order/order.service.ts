import httpStatus from "http-status";
import { Product } from "../product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";


// create order & update inventory
const createdTOrderToDb = async (order: TOrder, userId: string) => {

    // Check product is exists
    const product = await Product.findById(order.productId);

    if (!product) {
        return { success: false, message: "Product not found" };
    }

    // Calculate updated inventory
    const updatedInventory = product.inventory.quantity - order.quantity;

    // Check inventory is sufficient
    if (updatedInventory < 0) {
        return { success: false, 
            statusCode: httpStatus.BAD_REQUEST,
            message: "Insufficient inventory" };
    }

    // Update product inventory and stock status
    const inCurrentStock = updatedInventory > 0;
    await Product.updateOne(
        { _id: product.id },
        { $set: { 'inventory.quantity': updatedInventory, 'inventory.inStock': inCurrentStock } },
        { new: true }
    );

    
    // Create new order
    const result = await Order.create({...order, customer: userId});
    return result;

}



// Retrieve TOrders by User Email
const getOrerSearchByEmail = async (customer: string) => {
    const searchRegExp = customer ? new RegExp(customer, 'i') : '';

    const filter = {
        $or: [
            { email: { $regex: searchRegExp } }
        ]
    }
    const result = await Order.find(filter);
    return result;
};


const getUserOrder = async (userId: string) => {
    const orders = await Order.find({ customer: userId })
  
    // Map through orders to extract relevant data
    const mappedOrders = orders.map(order => {
        const { customer, ...orderData } = order.toObject();
        return orderData;
    });
    return {
        orders: mappedOrders
    };
};




export const OrderService = {
    createdTOrderToDb,
    getOrerSearchByEmail,
    getUserOrder
}