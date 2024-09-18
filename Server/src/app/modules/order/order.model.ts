import mongoose, { Schema } from 'mongoose';
import { TOrder } from './order.interface';

// Create schema
const orderSchema = new Schema<TOrder>({
    customer: { type: Schema.Types.ObjectId as any, ref: 'User' },
    productId: { type: String, required: [true, 'Product ID is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
},{
    timestamps: true
});



// Create model
export const Order = mongoose.model<TOrder>('Order', orderSchema);