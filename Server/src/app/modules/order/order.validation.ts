import { z } from 'zod';

// Order Schema added Zod validation
const orderSchemaValidation = z.object({
    body: z.object({
        customer: z.string().optional(),
        productId: z.string().min(1, { message: 'Product ID is required' }),
        price: z.number().nonnegative({ message: 'Price must be a non-negative number' }).min(0, { message: 'Price is required' }),
        quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }).min(1, { message: 'Quantity is required' }),
    })
});


export default orderSchemaValidation;