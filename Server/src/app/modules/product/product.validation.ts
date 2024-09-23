import { z } from 'zod';

// Variant Schema added Zod validation
// const variantSchema = z.object({
//     type: z.string().min(1, { message: 'Variant type is required' }),
//     value: z.string().min(1, { message: 'Variant value is required' })
// });

// Inventory Schema added Zod validation
const inventorySchema = z.object({
    quantity: z.number().min(0, { message: 'Inventory quantity is required' }),
    inStock: z.boolean().default(true),
});

// Product Schema added Zod validation
const createProduct = z.object({
    body: z.object({
        name: z.string(),
        description: z.string(),
        price: z.number(),
        category: z.string(),
        // tags: z.array(z.string()),
        images: z.string().optional(),
        // variants: z.array(variantSchema),
        inventory: inventorySchema,
        isDeleted: z.boolean().optional(),
    })
});

export const productValidations = {
    createProduct
};