import { Types } from "mongoose";

export type TOrder = {
    customer: Types.ObjectId;
    productId: string;
    price: number;
    quantity: number;
};

