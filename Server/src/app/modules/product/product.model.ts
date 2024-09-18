import { Schema, model } from 'mongoose';
import { Inventory, TProduct, Variant } from './product.interface';


// Variant Schema
const variantSchema = new Schema<Variant>({
    type: { type: String, required: [true, 'Variant type is required'] },
    value: { type: String, required: [true, 'Variant value is required'] },
});


// Inventory Schema
const inventorySchema = new Schema<Inventory>({
    quantity: { type: Number, required: [true, 'Inventory quantity is required'] },
    inStock: { type: Boolean, required: [true, 'Inventory stock status is required'] },
});

// Product Schema
const productSchema = new Schema<TProduct>({
    name: { type: String, required: [true, 'Product name is required'] },
    description: { type: String, required: [true, 'Product description is required'] },
    price: { type: Number, required: [true, 'Product price is required'] },
    category: { type: String, required: [true, 'Product category is required'] },
    tags: {
        type: [{ type: String }],
        required: [true, 'Product tags are required'],
    },
    productImage: { type: String },
    variants: [variantSchema],
    inventory: inventorySchema,
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true
});



// Create model
export const Product = model<TProduct>('Product', productSchema);

